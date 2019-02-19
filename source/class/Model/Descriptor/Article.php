<?php

namespace Planck\Extension\Content\Model\Descriptor;

use Planck\Model\EntityDescriptor;
use Planck\Model\Repository;

class Article extends EntityDescriptor
{


    public function __construct(Repository $repository, array $descriptor = null)
    {
        parent::__construct($repository, $descriptor);

        $this->fields['title']->isLabel(true);

    }


    public function getEntityLabel()
    {
        return 'Article';
    }

}

