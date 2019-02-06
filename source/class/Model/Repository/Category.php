<?php

namespace Planck\Extension\Content\Model\Repository;




use Planck\Model\Repository;
use Planck\Model\Traits\IsTreeRepository;

class Category extends Repository
{

    use IsTreeRepository;

    protected static $tableName = 'content_category';
}
