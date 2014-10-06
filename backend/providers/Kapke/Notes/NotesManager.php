<?php
namespace Provider\Kapke\Notes;

class NotesManager {
	private $orm;
	private $notesRepo;

	public function __construct ($doctrine) {
		$this->orm = $doctrine->getEntityManager();
	}

	public function getNotes () {
	}
}