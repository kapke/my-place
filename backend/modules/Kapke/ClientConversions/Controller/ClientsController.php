<?php
namespace Module\Kapke\ClientConversions\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;

class ClientsController extends FOSRestController {
	public function getClientsAction () {
		$clientManager = $this->get('kapke_client_provider.client_manager');
		$output = $clientManager->getClients();
		$view = $this->view($output);
		return $this->handleView($view);
	}
}

?>