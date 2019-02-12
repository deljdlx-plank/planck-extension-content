<?php

namespace Planck\Extension\Content\Model\Repository;



use Phi\Model\Entity;
use Planck\Helper\StringUtil;
use Planck\Model\Repository;
use Planck\Model\Traits\IsTreeRepository;

class Type extends Repository
{

    use IsTreeRepository;

    protected static $tableName = 'content_type';


    public function store(Entity $type, $dryRun = false)
    {
        if(!$type->getValue('qname') && $type->getId()) {

            $type->setValue(
                'qname',
                StringUtil::slugify(
                    $type->getValue('name')
                )
            );
        }
        return parent::store($type, $dryRun);
    }

}
