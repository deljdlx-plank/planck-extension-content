<?php


namespace Planck\Extension\Content\Module\Image\Router;



use Planck\Extension\Content\Module\Image\View\Component\Gallery;
use Planck\Routing\Router;


class Main extends Router
{




    public function registerRoutes()
    {


        $this->get('list', '`/images`', function() {


            $images = $this->application->getModel()->getRepository(
                \Planck\Extension\Content\Model\Repository\Image::class
            )->getAll();


            $view = new Gallery();
            $view->setImages($images);
            $output = $view->render();


            echo $output;

        })->html()
        ->setBuilder('/images')

        ;







        return parent::registerRoutes();
    }

}