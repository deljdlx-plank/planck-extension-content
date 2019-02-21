<?php

namespace Planck\Extension\Content\Model\Entity;



use Planck\Extension\Model\Traits\IsPlanckEntity;
use Planck\Extension\User\Model\Entity\User;
use Planck\Model\Traits\HasProperties;
use Planck\Model\Traits\HasSlug;


class Article extends Content
{

    use IsPlanckEntity;
    use HasProperties;
    use HasSlug;

    /**
     * @var Image
     */
    protected $image;

    /**
     * @var Author
     */
    protected $author;


    /**
     * @var Category
     */
    protected $category;


    protected $foreignKeys = array(
        'image_id' => Image::class,
        'user_id' => User::class,
        'category_id' => Category::class,
        'type_id' => Type::class,
    );


    public function getCategory()
    {
        $category = $this->getForeignEntity(
            $this->category,
            \Planck\Extension\Content\Model\Repository\Category::class,
            'category_id'
        );
        return $category;
    }

    public function hasCategory()
    {
        $category = $this->getCategory();
        if($category->getId()) {
            return true;
        }
        return false;
    }






    public function getTitle()
    {
        return $this->getValue('title');
    }


    public function setAuthor(User $user)
    {
        $this->author = $user;
        $this->setValue('user_id', $user->getId());
        return $this;
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
        $this->getImage();
        return $this;
    }



}
