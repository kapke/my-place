<?php
namespace Kapke\Module\ClientData\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\View\View;
use Kapke\Provider\Clients\Entity\Product;
use Kapke\Provider\Clients\Entity\Vendor;

class ProductsController extends FOSRestController
{
    public function getProductsAction()
    {
        $products = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Product')->findAll();
        $view = $this->view($products);

        return $this->handleView($view);
    }

    public function postProductsAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $vendorRepo = $this->getDoctrine()->getRepository('Kapke\\Provider\\Clients\\Entity\\Vendor');
        $vendor = $vendorRepo->findOneBy(['name' => $request->request->get('vendor')]);
        if (!$vendor) {
            $vendor = new Vendor($request->request->get('vendor'));
            $em->persist($vendor);
        }
        $newProduct = new Product($vendor, $request->request->get('name'));
        $em->persist($newProduct);
        $em->flush();
        $response = new Response();
        $response->setStatusCode(Response::HTTP_CREATED);

        return $response;
    }
}
