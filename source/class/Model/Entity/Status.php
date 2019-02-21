<?php

namespace Planck\Extension\Content\Model\Entity;



use Planck\Extension\Model\Traits\IsPlanckEntity;
use Planck\Extension\User\Model\Entity\User;
use Planck\Model\Traits\HasProperties;



class Status extends \Planck\Extension\StatusManager\Model\Entity\Status
{
    protected $foreignKeys = array(
        'nextstatus_id' => Status::class,
        'previousstatus_id' => Status::class,
    );

}


