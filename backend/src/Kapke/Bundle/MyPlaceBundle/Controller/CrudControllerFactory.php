<?php
namespace Kapke\Bundle\MyPlaceBundle\Controller;

class CrudControllerFactory
{
	private $entityManager;
	private $viewHandler;
	private $validator;

	public function __construct($entityManager, $viewHandler)
	{
		$this->entityManager = $entityManager;
		$this->viewHandler = $viewHandler;
	}

	public function get($entity)
	{
		return new CrudController($this->entityManager, $this->viewHandler, $entity);
	}
}