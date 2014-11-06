<?php
namespace Kapke\Bundle\MyPlaceBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Kapke\Provider\Notes\Entity\Note;

class CrudController extends FOSRestController
{
	private $entityManager;
	private $repository;
	private $viewHandler;
	private $Entity;
	private $entityMetaData;

	public function __construct($entityManager, $viewHandler, $Entity) 
	{
		$this->entityManager = $entityManager;
		$this->viewHandler = $viewHandler;
		$this->repository = $entityManager->getRepository($Entity);
		$this->Entity = $Entity;
		$this->entityMetaData = $entityManager->getClassMetadata($Entity);
	}

	public function getEntitiesAction()
	{
        $entities = $this->repository->findAll();
        $view = $this->view($entities);

        return $this->handleView($view);
	}

	public function postEntitiesAction(Request $request)
	{
		//print_r($this->entityMetaData);
		$entity = $this->entityMetaData->newInstance();
    	$em = $this->entityManager;
    	foreach($this->entityMetaData->fieldNames as $fieldName) {
    		$mapping = $this->entityMetaData->fieldMappings[$fieldName];
    		$type = $mapping['type'];
    		$value = $request->request->get($fieldName);
    		if(is_null($value)) {
    			$defaultValue;
    			switch ($type) {
    				case 'string':
    					$defaultValue = '';
    					break;
    				case 'integer':
    					$defaultValue = 0;
    					break;
    					
    				default:
    					$defaultValue = false;
    					break;
    			}
    			if($defaultValue !== false) {
    				$value = $defaultValue;
    			}
    		}
    		$this->entityMetaData->setFieldValue($entity, $fieldName, $value);
    	}
    	$em->persist($entity);
    	$em->flush();
    	$response = new Response();
    	$response->setStatusCode(Response::HTTP_CREATED);

    	return $response;
	}

	protected function handleView(View $view)
    {
        return $this->viewHandler->handle($view);
    }
}