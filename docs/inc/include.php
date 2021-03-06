<?php

function __autoload($class)
{
    $filename = './classes/'.$class.'.php';
    require_once $filename;
}

function absolute_url($urlpage = 'index.php?page=main')
{
    $url = 'http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']);
    $url = rtrim($url, '/\\');
    $url .= '/'.$urlpage;

    return $url;
}

function isAndroid()
{
    $userAgent = strtolower($_SERVER['HTTP_USER_AGENT']);
    if (stripos($userAgent, 'android') !== false) {
        return true;
    } else {
        return false;
    }
}
