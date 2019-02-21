<?php

namespace Planck\Extension\Content\Model\Repository;



use Phi\Model\Entity;
use Planck\Helper\StringUtil;
use Planck\Model\Repository;
use Planck\Model\Traits\IsTreeRepository;

class Status extends \Planck\Extension\StatusManager\Model\Repository\Status
{


    protected static $tableName = 'content_status';

}
