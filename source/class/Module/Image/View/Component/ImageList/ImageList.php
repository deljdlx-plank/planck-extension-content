<?php

namespace Planck\Extension\Content\Module\Image\View\Component;

use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;
use Planck\Model\Dataset;



class ImageList extends JavascriptComponent
{


    public function initialize()
    {
        parent::initialize();
        $this->setVariable('images', new Dataset());
        $this->disableDataLayer();
        $this->disableToolbar();
        $this->addCSSClass('plk-image-list');


        $javascriptBootstrap = $this->getLocalJavascriptFile(
            $this->getExtension()->getJavascriptsFilepath().'/bootstrap/imageList.js'
        );

        $this->addJavascriptFile(
            $javascriptBootstrap
        );



    }


    public function setImages($images)
    {
        $this->setVariable('images', $images);
    }


    public function loadAllImages()
    {
        $images = $this->application->getModel()->getRepository(
            \Planck\Extension\Content\Model\Repository\Image::class
        )->getAll();
        $this->setImages($images);
    }



    public function getContent()
    {


        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', array_merge(
                    $this->getVariables(),
                    array(

                    )
                )
            ));

        return $this->dom->html();
    }


}
