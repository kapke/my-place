<?php
namespace Kapke\Module\Notes\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;

class NotesController extends FOSRestController
{
    private $crudController;

    public function __construct($crudControllerFactory, $doctrine)
    {
        $entity = 'Kapke\\Provider\\Notes\\Entity\\Note';
        $this->crudController = $crudControllerFactory->get($entity);
    }

    public function getNotesAction()
    {
        return $this->crudController->getEntitiesAction();    
    }

    public function postNotesAction(Request $request)
    {
        return $this->crudController->postEntitiesAction($request);   	
    }
}
