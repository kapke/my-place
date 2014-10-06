<?php
namespace Module\Kapke\ClientConversions\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;

class ClientsController extends FOSRestController {
	public function getClientsAction () {
		$view = $this->view(['ala', 'ma', 'kota']);
		return $this->handleView($view);
	}
}

?>