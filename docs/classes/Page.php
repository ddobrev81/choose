<?php
/**
 * Description of Page.
 *
 * @author Dodo
 */
class Page
{
    private $html;
    private $header;
    private $footer;
    private $body;

    public function __construct($content)
    {
        $template = new Template();
        $template->vars = $content;
        $this->html = $template->render('html.tpl.php');
        $this->header = $template->render('header.tpl.php');
        $this->body = $template->render('body.tpl.php');
        $this->footer = $template->render('footer.tpl.php');
    }
    public function __destruct()
    {
    }
    public function render()
    {
        echo $this->html;
        echo $this->header;
        echo $this->body;
        echo $this->footer;
    }
}
