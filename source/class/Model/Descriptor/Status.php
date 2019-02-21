<?php

namespace Planck\Extension\Content\Model\Descriptor;

use Planck\Model\EntityDescriptor;
use Planck\Model\Repository;

class Status extends EntityDescriptor
{


    public function __construct(Repository $repository, array $descriptor = null)
    {
        parent::__construct($repository, $descriptor);

        $this->fields['name']->isLabel(true);

    }


    public function getEntityLabel()
    {
        return 'Status';
    }

}

