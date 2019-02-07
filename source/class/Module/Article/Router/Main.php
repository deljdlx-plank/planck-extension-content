<?php


namespace Planck\Extension\Content\Module\Article\Router;


use Phi\HTML\JavascriptFile;
use Planck\Router;
use Planck\Extension\Content\Model\Entity\Article;
use Planck\Extension\Content\Module\Article\View\Component\ArticleEditor;
use Planck\Extension\Content\Module\Article\View\Component\Listing;


class Main extends Router
{




    public function registerRoutes()
    {





        $this->get('content/article/edit', '`/content/article/edit`', function() {


            $assets = $this->router->getAssets();


            $javascriptBootstrap = $this->router->getExtension()->getExtensionJavascript('/javascript/bootstrap/articleEdit.js');



            $assets[] = $javascriptBootstrap;


            $this->response->addExtraData('resources', $assets);


            $component = new ArticleEditor();
            if($articleId = (int) $this->request->get('article')) {
                $article = $this->application->getModel()->getEntity(Article::class);
                $article->loadById($articleId);
                $component->setArticle($article);
            }
            echo $component->render();

        })->html()
        ->setBuilder(function($articleId = false) {
            $url = '/content/article/edit';
            if($articleId) {
                $url .= '&article='.$articleId;
            }
            return $url;
        });


        $this->get('list', '`/articles`', function() {



            $articles = $this->application->getModel()->getRepository(
                \Planck\Extension\Content\Model\Repository\Article::class
            )->getAll();
            $view = new Listing();
            $view->setArticles($articles);
            echo $view->render();
        })->html()
        ->setBuilder('/articles')
        ;







        return parent::registerRoutes();
    }

}