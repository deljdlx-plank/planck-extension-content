<?php

namespace Planck\Extension\Content\Module\Image\View\Component;

use Planck\Extension\ViewComponent\View\Component\Container;
use Planck\Extension\ViewComponent\View\Component\JavascriptComponent;



class Thumbnail extends JavascriptComponent
{


    public function initialize()
    {
        parent::initialize();
        $this->addCSSClass('plk-image-thumbnail');
    }


    public function setImage($image)
    {
        $this->setVariable('image', $image);
    }

    public function getImage()
    {
        return $this->getVariable('image');
    }

    public function getStyle()
    {
        return 'height: 200px; width: 200px; '.$this->getImage()->getCSSCropProperties(200, 200).';';
    }

    public function getContent()
    {


        $this->dom->html(
            $this->obInclude(__DIR__.'/template.php', array_merge(
                    $this->getVariables(),
                    array(
                        //'saveArticleURL' => $saveArticleURL,
                    )
                )
            )
        );

        $toolbar = $this->getToolbar();
        $toolbar->setTitle($this->getVariable('image')->getId());

        return $this->dom->html();


    }


}
