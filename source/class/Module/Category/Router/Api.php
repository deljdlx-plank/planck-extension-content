<?php


namespace Planck\Extension\Content\Module\Category\Router;



use Planck\Extension\Content\Model\Entity\Category;

use Planck\Extension\EntityEditor\EntityTreeApiRouter;





class Api extends EntityTreeApiRouter
{


    public function getEntity()
    {
        return $this->application->getModelEntity(Category::class);
    }

    public function getRepository()
    {
        return $this->application->getModelRepository(\Planck\Extension\Content\Model\Repository\Category::class);
    }

    public function getRoutePath()
    {
        return '/category/api';
    }

}