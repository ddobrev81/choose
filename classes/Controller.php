<?php
/**
 * Description of Controller.
 *
 * @author Dodo
 */
class Controller
{
    private $vars = array();

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

    public function getVars()
    {
        return $this->vars;
    }
}
