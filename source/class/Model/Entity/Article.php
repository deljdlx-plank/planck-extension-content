<?php

namespace Planck\Extension\Content\Model\Entity;



use Planck\Extension\Model\Traits\IsPlanckEntity;
use Planck\Model\Traits\HasProperties;



class Article extends Content
{

    use IsPlanckEntity;
    use HasProperties;

    /**
     * @var Image
     */
    protected $image;

    /**
     * @var Author
     */
    protected $author;



    public function getTitle()
    {
        return $this->getValue('title');
    }


    public function getAuthor()
    {
        $author = $this->getForeignEntity(
            $this->author,
            \Planck\Extension\Content\Model\Repository\Author::class,
            'user_id'
        );
        return $author;
    }





    public function hasImage()
    {
        if($this->getValue('image_id')) {
            return true;
        }
        return false;
    }


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
