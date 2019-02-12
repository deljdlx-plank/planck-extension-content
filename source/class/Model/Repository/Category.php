<?php

namespace Planck\Extension\Content\Model\Repository;




use Phi\Model\Entity;
use Planck\Helper\StringUtil;
use Planck\Model\Repository;
use Planck\Model\Traits\IsTreeRepository;

class Category extends Repository
{

    use IsTreeRepository;

    protected static $tableName = 'content_category';


    public function store(Entity $category, $dryRun = false)
    {
        if(!$category->getValue('qname') && $category->getId()) {

            $category->setValue(
                'qname',
                StringUtil::slugify(
                    $category->getValue('name')
                )
            );
        }
        return parent::store($category, $dryRun);
    }

}
