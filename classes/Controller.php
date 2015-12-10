<?php
/**
 * Description of Controller.
 *
 * @author Dodo
 */
 class Controller
 {
     private $cContent = array();

     public function __construct($page)
     {
         switch ($page) {
            case 'main':
                include 'models/main.php';
                break;

            default:
                include 'models/main.php';
                break;
        }
     }

     public function getContent()
     {
         return $this->cContent;
     }
 }
