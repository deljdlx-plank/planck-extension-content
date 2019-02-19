<?php

namespace Planck\Extension;


use Planck\Application\Application;
use Planck\Application\Extension;
use Planck\Extension\FrontVendor\Package\JQueryUI;
use Planck\Extension\FrontVendor\Package\Planck;
use Planck\Extension\FrontVendor\Package\Tree;

class Content extends Extension
{


    public function __construct(Application $application)
    {
        parent::__construct($application);


        $this->addFrontPackage(
           new Tree()
        );

        $this->addFrontPackage(
            new JQueryUI()
        );

    }


}
