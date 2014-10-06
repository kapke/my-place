<?php
namespace Module\Kapke\ClientConversions\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="client_conversions__client")
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
}