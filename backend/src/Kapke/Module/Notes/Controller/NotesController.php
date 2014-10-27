<?php
namespace Kapke\Module\Notes\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use FOS\RestBundle\Controller\FOSRestController;
use Kapke\Provider\Notes\Entity\Note;

class NotesController extends FOSRestController
{
    public function getNotesAction()
    {
        $notesRepo = $this->getDoctrine()->getRepository('Kapke\\Provider\\Notes\\Entity\\Note');
        $notes = $notesRepo->findAll();
        $view = $this->view($notes);

        return $this->handleView($view);
    }

    public function postNotesAction(Request $request)
    {
    	$note = new Note();
    	$em = $this->getDoctrine()->getEntityManager();
    	$title = $request->request->get('title');
    	$description = $request->request->get('description');
    	$content = $request->request->get('content');
    	$title = $title?$title:'';
    	$description = $description?$description:'';
    	$content = $content?$content:'';
    	$note->setTitle($title);
    	$note->setDescription($description);
    	$note->setContent($content);
    	$em->persist($note);
    	$em->flush();
    	$response = new Response();
    	$response->setStatusCode(Response::HTTP_CREATED);

    	return $response;
    }
}
