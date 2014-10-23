<?php
namespace Kapke\Module\ClientData\Controller;

use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Kapke\Provider\Clients\Entity\Vendor;

class VendorsController extends FOSRestController
{
    public function getVendorsAction()
    {
        $vendors = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Vendor')->findAll();
        $view = $this->view($vendors);

        return $this->handleView($view);
    }

    public function postVendorsAction(Request $request)
    {
        $em = $this->getDoctrine()->getEntityManager();
        $name = $request->request->get('name');
        $vendor = new Vendor($name);
        $em->persist($vendor);
        $em->flush();
        $response = new Response();
        $response->setStatusCode(Response::HTTP_CREATED);

        return $response;
    }
}
