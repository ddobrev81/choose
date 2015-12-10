<?php #index.php

// Turn reporting on.
error_reporting(E_ALL ^ E_NOTICE);

// Includes
include 'inc/include.php';

// Routing.
if(!isset($_GET['page'])) {
    $_GET['page'] = 'main';
}

$site = new cSite();
initialise_site($site);
$page = new cPage($_GET['page']);
$site->setPage($page);
$controller = new Controller($_GET['page']);
$content = $controller->getContent();
$page->setContent($content);
$site->render();
