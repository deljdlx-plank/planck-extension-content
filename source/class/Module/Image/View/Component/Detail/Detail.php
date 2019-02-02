<?php

namespace Planck\Extension\Content\Module\Image\View\Component;

use Planck\Extension\ViewComponent\View\Component\Container;
use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;



class Detail extends JavascriptComponent
{


    public function initialize()
    {
        parent::initialize();
        $this->addCSSClass('plk-image-detail');
        $this->disableToolbar();

        $this->addCSSFile('vendor/jquery-cropper/dist/cropper.css');

        $this->addJavascriptFile('vendor/jquery-cropper/dist/jquery-cropper.js');

        //$this->addJavascriptFile('vendor/jquery-cropper/dist/jquery-cropper-initialize.js');

    }


    public function setImage($image)
    {
        $this->setVariable('image', $image);
    }

    public function getImage()
    {
        return $this->getVariable('image');
    }


    public function getContent()
    {

        $saveURL = $this->buildURL('Api', 'save-info').'&redirect='.$this->buildURL('Main', 'list');


        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', array_merge(
                    $this->getVariables(),
                    array(
                        'saveURL' => $saveURL,
                    )
                )
            )
        );

        $toolbar = $this->getToolbar();
        $toolbar->setTitle($this->getVariable('image')->getId());

        return $this->dom->html();


    }


}
