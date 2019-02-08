<?php


namespace Planck\Extension\Content\Module\Type\Router;



use Planck\Extension\Content\Model\Entity\Type;
use Planck\Extension\EntityEditor\EntityTreeApiRouter;






class Api extends EntityTreeApiRouter
{


    public function getEntity()
    {
        return $this->application->getModelEntity(Type::class);
    }

    public function getRepository()
    {
        return $this->application->getModelRepository(\Planck\Extension\Content\Model\Repository\Type::class);
    }

    public function getRoutePath()
    {
        return '/type/api';
    }

}