<?php

namespace Planck\Extension\Content\Model\Repository;




use Planck\Model\Repository;
use Planck\Model\Traits\IsTreeRepository;

class Type extends Repository
{

    use IsTreeRepository;

    protected static $tableName = 'content_type';
}
