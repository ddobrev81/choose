<?php
#index.php

// Turn reporting on.
error_reporting(E_ALL ^ E_NOTICE);

// Includes
include 'inc/include.php';

// Basic routing. Check the URL and build the content for it.
if (!isset($_GET['page'])) {
    $_GET['page'] = 'main';
}
$controller = new Controller($_GET['page']);
$content = $controller->getVars();

// Pass the content to cPage construtor and use the template engine.
$page = new Page($content);
$page->render();
