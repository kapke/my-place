<?php
namespace Kapke\Provider\Clients\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * @ORM\Entity
 * @ORM\Table(name="clients_provider__client")
 */
class Client
{
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
    /**
     * @ORM\ManyToMany(targetEntity="Product")
     * @ORM\JoinTable(name="clients_provider__clients_products", 
     *    joinColumns={@ORM\JoinColumn(name="client_id", referencedColumnName="id")},
     *    inverseJoinColumns={@ORM\JoinColumn(name="product_id", referencedColumnName="id")}
     *    )
     */
    private $products;

    public function __construct($name, $surname)
    {
        $this->name = $name;
        $this->surname = $surname;
        $this->products = new ArrayCollection();
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setSurname($surname)
    {
        $this->surname = $surname;
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Get surname
     *
     * @return string 
     */
    public function getSurname()
    {
        return $this->surname;
    }

    /**
     * Add products
     *
     * @param \Kapke\Provider\Clients\Entity\Product $products
     * @return Client
     */
    public function addProduct(\Kapke\Provider\Clients\Entity\Product $products)
    {
        $this->products[] = $products;

        return $this;
    }

    /**
     * Remove products
     *
     * @param \Kapke\Provider\Clients\Entity\Product $products
     */
    public function removeProduct(\Kapke\Provider\Clients\Entity\Product $products)
    {
        $this->products->removeElement($products);
    }

    /**
     * Get products
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getProducts()
    {
        return $this->products;
    }
}
