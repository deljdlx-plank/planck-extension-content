<?php

namespace Planck\Extension\Content\Model\Entity;



use Planck\Model\Entity;
use Planck\Model\Traits\HasProperties;

class Article extends Entity
{
    use HasProperties;

    /**
     * @var Image
     */
    protected $image;


    public function setImage(Image $image)
    {
        $this->image = $image;
        return $this;
    }

    public function getImage()
    {
        $image = $this->getForeignEntity(
            $this->image,
            \Planck\Extension\Content\Model\Repository\Image::class,
            'image_id'
        );
        return $image;
    }


    public function loadAll()
    {
        //die('EXIT '.__FILE__.'@'.__LINE__);
        $this->getImage();
        return $this;
    }



}
