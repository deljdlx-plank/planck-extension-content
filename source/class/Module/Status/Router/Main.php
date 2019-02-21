<?php


namespace Planck\Extension\Content\Module\Status\Router;



use Planck\Extension\Content\Model\Repository\Status;
use Planck\Extension\StatusManager\View\StatusEditor;
use Planck\Routing\Router;



class Main extends Router
{


    public function registerRoutes()
    {


        $this->get('index', '`/content/status/index`', function() {

            $statusRepository = $this->getApplication()->getModelRepository(Status::class);

            $view = new StatusEditor();
            $view->setRepository($statusRepository);
            echo $view->render();

            //echo 'hello world';

        })->html();


    }

}

