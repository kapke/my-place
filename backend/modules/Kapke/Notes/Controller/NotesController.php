<?php
namespace Module\Kapke\Notes\Controller;

use FOS\RestBundle\Controller\FOSRestController;

class NotesController extends FOSRestController {
	public function getNotesAction () {
		//print_r($this);
		$notesManager = $this->get('kapke_notes_provider.notes_manager');
		//print_r($notesManager);
		$view = $this->view(['ala', 'ma', 'kota']);
		return $this->handleView($view);
	}
}