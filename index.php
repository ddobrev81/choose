<?php
#index.php

// Turn reporting on.
error_reporting(E_ALL ^ E_NOTICE);

// Includes
include 'inc/include.php';

// Routing.
if (!isset($_GET['page'])) {
    $_GET['page'] = 'main';
}
// move the controller so he can prepare $vars early
$controller = new Controller($_GET['page']);
$content = $controller->getContent();

// make cSite construtor use the template engine. $vars should be ready at this moment and should be passed to the constructor
$site = new cSite(); // pass $vars
 // move this to cSite constructor
 //initialise_site($site);

// rework this part to make sense again
// do we need 2 classes? only page class should do.
// need new methos to build the body
$page = new cPage($_GET['page']);
$site->setPage($page);
$page->setContent($content);
$site->render();
