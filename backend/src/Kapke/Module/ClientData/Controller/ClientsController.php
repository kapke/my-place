<?php
namespace Kapke\Module\ClientData\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Kapke\Provider\Clients\Entity\Client;
use Kapke\Provider\Clients\Entity\Product;

class ClientsController extends FOSRestController
{
    public function getClientsAction()
    {
        $clients = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Client')->findAll();
        $view = $this->view($clients);

        return $this->handleView($view);
    }

    public function postClientsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $newClient = new Client($request->request->get('name'), $request->request->get('surname'));
        $em->persist($newClient);
        $em->flush();
        $response = new Response();
        $response->setStatusCode(Response::HTTP_CREATED);

        return $response;
    }

    public function deleteClientAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $client = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Client')->find($id);
        $em->remove($client);
        $em->flush();
        $response = new Response();
        $response->setStatusCode(Response::HTTP_NO_CONTENT);

        return $response;
    }

    public function putClientAction($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $client = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Client')->find($id);
        $client->setName($request->request->get('name'));
        $client->setSurname($request->request->get('surname'));
        $addedProduct = $request->request->get('addedProduct');
        if ($addedProduct) {
            $product = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Product')->find($addedProduct['id']);
            $client->addProduct($product);
        }
        $em->persist($client);
        $em->flush();
        $view = $this->view($client);

        return $this->handleView($view);
    }
}
