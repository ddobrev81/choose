<?php
/**
 * Description of cSite.
 *
 * @author Dodo
 */
class cSite
{
    private $html;
    private $headers;
    private $footers;
    private $page;
    public function __construct()
    {
        $this->html = array();
        $this->headers = array();
        $this->footers = array();
    }
    public function __destruct()
    {
    }
    // rework render() to use the templates
    public function render()
    {
        foreach ($this->html as $html) {
            include $html;
        }
        foreach ($this->headers as $header) {
            include $header;
        }
        $this->page->render();
        foreach ($this->footers as $footer) {
            include $footer;
        }
    }
    public function addHtml($file)
    {
        $this->html[] = $file;
    }
    public function addHeader($file)
    {
        $this->headers[] = $file;
    }
    public function addFooter($file)
    {
        $this->footers[] = $file;
    }
    public function setPage(cpage $page)
    {
        $this->page = $page;
    }
}
