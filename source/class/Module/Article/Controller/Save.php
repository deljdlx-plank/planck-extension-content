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


        $values = $data['values'];

        if(array_key_exists('id', $values)) {
            if((int) $values['id']) {
                $article->loadById($values['id']);

                if($article->getAuthor()->getId()) {
                    if($article->getAuthor()->getId() != $user->getId()) {
                        throw new Unauthorized();
                    }
                }
            }
        }




        $article->setValues($values);
        $article->setAuthor($user);
        $article->store();
        return $article;

    }


}

