<?php
namespace Kapke\Module\ClientConversions\Entity;

use Doctrine\ORM\Mapping as ORM;
use Kapke\Provider\Clients\Entity\Product;
use Kapke\Provider\Clients\Entity\Client;

/**
 * @ORM\Entity
 * @ORM\Table(name="client_conversions__conversion")
 */
class Conversion
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;
    /**
     * @ORM\ManyToOne(targetEntity="Kapke\Provider\Clients\Entity\Product")
     * @ORM\JoinColumn(name="product_id", referencedColumnName="id")
     * @var Product
     */
    private $product;
    /**
     * @ORM\ManyToOne(targetEntity="Kapke\Provider\Clients\Entity\Client")
     * @ORM\JoinColumn(name="client_id", referencedColumnName="id")
     * @var Client
     */
    private $client;
    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $timestamp;

    public function __construct()
    {
        $this->timestamp = new \DateTime();
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
     * Set timestamp
     *
     * @param \DateTime $timestamp
     * @return Conversion
     */
    public function setTimestamp($timestamp)
    {
        $this->timestamp = $timestamp;

        return $this;
    }

    /**
     * Get timestamp
     *
     * @return \DateTime 
     */
    public function getTimestamp()
    {
        return $this->timestamp;
    }

    /**
     * Set product
     *
     * @param \Kapke\Module\ClientConversions\Entity\Product $product
     * @return Conversion
     */
    public function setProduct(Product $product = null)
    {
        $this->product = $product;

        return $this;
    }

    /**
     * Get product
     *
     * @return \Kapke\Module\ClientConversions\Entity\Product 
     */
    public function getProduct()
    {
        return $this->product;
    }

    /**
     * Set client
     *
     * @param \Kapke\Module\ClientConversions\Entity\Client $client
     * @return Conversion
     */
    public function setClient(Client $client = null)
    {
        $this->client = $client;

        return $this;
    }

    /**
     * Get client
     *
     * @return \Kapke\Module\ClientConversions\Entity\Client 
     */
    public function getClient()
    {
        return $this->client;
    }
}
