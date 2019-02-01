<?php

namespace Planck\Extension\Content\Module\Article\View\Component;

use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;
use Planck\Extension\Content\Model\Entity\Article;

class ArticleEditor extends  JavascriptComponent
{


    public function initialize()
    {
        parent::initialize();

        $this->addCSSClass('plk-article-editor');



        $this->disableToolbar();

        $this->setVariable(
            'article', $this->getApplication()->getModelEntity(Article::class)
        );


    }

    public function setArticle(Article $article)
    {
        $this->setVariable('article', $article);


        return $this;
    }

    public function getContent()
    {
        $saveArticleURL = $this->buildURL('Api', 'save', array(
            'redirect' => $this->buildURL('Main', 'list')
        ));


        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', array_merge(
                    $this->getVariables(),
                    array(
                        'saveArticleURL' => $saveArticleURL,
                    )
                )
            ));

        return $this->dom->html();
    }


}
