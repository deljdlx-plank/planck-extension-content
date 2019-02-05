<?php

namespace Planck\Extension\Content\Module\Article\View\Component;

use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;
use Planck\Model\Dataset;



class Listing extends JavascriptComponent
{


    public function initialize()
    {
        parent::initialize();
        $this->setVariable('articles', new Dataset());
    }


    public function setArticles($articles)
    {
        $this->setVariable('articles', $articles);
    }



    public function getContent()
    {



        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', array_merge(
                    $this->getVariables(),
                    array(
                        //'saveArticleURL' => $saveArticleURL,
                    )
                )
            ));

        return $this->dom->html();
    }


}
