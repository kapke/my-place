<?php
namespace Provider\Kapke\Clients\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="clients_provider__client")
 */
class Client {
	/**
	 * @ORM\Column(type="integer")
	 * @ORM\Id
	 * @ORM\GeneratedValue(strategy="AUTO")
	 */
	private $id;
	/**
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $name;
	/**
	 * @ORM\Column(type="string")
	 * @var string
	 */
	private $surname;

	public function __construct ($name, $surname) {
		$this->name = $name;
		$this->surname = $surname;
	}

	public function setName ($name) {
		$this->name = $name;
	}

	public function setSurname ($surname) {
		$this->surname = $surname;
	}
}