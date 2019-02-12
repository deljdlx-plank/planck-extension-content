<?php
namespace Planck\Extension\Content\Module\Article\Controller;


use Planck\Controller;
use Planck\Exception\Unauthorized;
use Planck\Extension\Content\Model\Entity\Article;

class Save extends Controller
{



    public function execute($data)
    {

        $user = $this->getApplication()->getUser();


        if(!$user) {
            throw new Unauthorized();
        }

        $article = $this->application->getModel()->getEntity(Article::class);

        if(array_key_exists('id', $data)) {
            if((int) $data['id']) {
                $article->loadById($data['id']);

                if($article->getAuthor()->getId()) {
                    if($article->getAuthor()->getId() != $user->getId()) {
                        throw new Unauthorized();
                    }
                }
            }
        }




        $article->setValues($data);
        $article->setAuthor($user);

        $article->store();


        return $article;

    }


}

