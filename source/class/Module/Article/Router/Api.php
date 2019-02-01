<?php


namespace Planck\Extension\Content\Module\Article\Router;


use Planck\Router;
use Planck\Extension\Content\Model\Entity\Article;



class Api extends Router
{



    public function registerRoutes()
    {




        $this->post('save', '`content/article/save`', function() {


            $data = $this->post();
            $article = $this->application->getModel()->getEntity(Article::class);
            $article->setValues($data);

            $article->store();

            $redirection = $this->request->get('redirection');
            if($redirection && !$this->request->data('no-redirection')) {
                $this->redirect($redirection.'&article='.$article->getId());
            }
            else {
                echo json_encode($article->getValues());
            }


        })->json()


        ->setBuilder(function($redirection = false) {
            $url = '/content/article/save';
            if($redirection) {
                $url .= '&redirection='.rawurlencode($redirection);
            }
            return $url;
        });
        ;







        return parent::registerRoutes();
    }

}