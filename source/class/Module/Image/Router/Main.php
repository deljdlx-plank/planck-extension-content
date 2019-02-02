<?php


namespace Planck\Extension\Content\Module\Image\Router;



use Planck\Extension\Content\Module\Image\View\Component\Gallery;
use Planck\Router;


class Main extends Router
{




    public function registerRoutes()
    {


        $this->get('list', '`/images`', function() {

            /*
            $javascriptBootstrap = $this->getLocalJavascriptFile(
                $this->router->getExtension()->getJavascriptsFilepath().'/bootstrap/imageList.js'
            );
            $assets[] = $javascriptBootstrap;
            */

            $images = $this->application->getModel()->getRepository(
                \Planck\Extension\Content\Model\Repository\Image::class
            )->getAll();


            $view = new Gallery();
            $view->setImages($images);
            $output = $view->render();


            $assets = $this->router->getAssets();
            $this->response->addExtraData('resources', $assets);

            echo $output;

        })->html()
        ->setBuilder('/images')

        ;







        return parent::registerRoutes();
    }

}