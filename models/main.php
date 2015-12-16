<?php
// build $vars here to be passed to the templates
$vars = array();
$vars['html']['title'] = 'Choose';
$vars['html']['url'] = 'http://choose.com';

$vars['header']['android'] = isAndroid();

include 'res/articles.php';
$vars['body']['intro'] = $intro;
$vars['body']['content'] = $articles;

$vars['footer'] = '';

$this -> vars = $vars;
