<?php


namespace Planck\Extension\Content\Module\Image\Controller;


use Planck\Controller;
use Planck\Extension\Content\Model\Entity\Image;
use Planck\Extension\Tool\ImageUploader;
use Planck\Helper\File;

class Save extends Controller
{

    protected $relativeImageFilepath;
    protected $absoluteImageFilepath;
    protected $imageURLRoot;


    public function initialize()
    {
        $this->relativeImageFilepath = $this->getApplication()->get('user-data-filepath-root', array(false)) . '/entity/image';
        $this->absoluteImageFilepath = $this->getApplication()->get('user-data-filepath-root') . '/entity/image';

        $this->imageURLRoot = $this->application->get('user-data-url-root', array(false)) . '/entity/image';

        return $this;
    }



    public function execute($data)
    {

        $imageEntity = $this->application->getModelEntity(Image::class);

        if(!empty($data['imageURL'])) {
            $temporaryImagePath = $this->saveByURL($data);
        }
        else if(!empty($data['rawBuffer'])) {
            $temporaryImagePath = $this->saveByBuffer($data);
        }
        else {
            return false;
        }


        if ($temporaryImagePath) {

            $imageEntity->store(true);

            $path = $this->application->get('user-data-filepath-root') . '/entity/image/' . $imageEntity->getId();

            if (!is_dir($path)) {
                mkdir($path, 0775, true);
            }


            $baseName = 'original.' . File::getExtension($temporaryImagePath);
            $imagePath =
                $path . '/' . $baseName
            ;

            rename(
                $temporaryImagePath,
                $imagePath
            );

            $url = $this->application->get('user-data-url-root', array(false)) . '/entity/image/' . $imageEntity->getId().'/'.$baseName;
            $path = $this->application->get('user-data-filepath-root', array(false)) . '/entity/image/' . $imageEntity->getId().'/'.$baseName;

            $imageInfo = getimagesize($imagePath);


            $width = $imageInfo[0];
            $height = $imageInfo[1];

            $imageEntity->getProperty('width')->setValue($width);
            $imageEntity->getProperty('height')->setValue($height);



            $imageEntity->setValue('path', $path);
            $imageEntity->setValue('url', $url);
            $imageEntity->store();
            $imageEntity->commit();

            return $imageEntity;

        }

        return false;
    }








    public function getImageFilepath($absolutePath = true)
    {
        if($absolutePath) {
            return $this->absoluteImageFilepath;
        }

        return $this->relativeImageFilepath;
    }

    public function getImageURLRoot()
    {
        return $this->imageURLRoot;
    }


    public function createByFile($file)
    {


        $temporaryImagePath = $file->saveIntoPath($this->getImageFilepath());


        $imageEntity = $this->application->getModelEntity(Image::class);
        $imageEntity->store(true);


        $path = $this->getImageFilepath().'/' . $imageEntity->getId();

        if (!is_dir($path)) {
            mkdir($path, 0775, true);
        }

        $baseName = 'original.' . File::getExtension($temporaryImagePath);
        $imagePath =
            $path . '/' . $baseName
        ;

        rename(
            $temporaryImagePath,
            $imagePath
        );

        $url = $this->getImageURLRoot().'/'. $imageEntity->getId().'/'.$baseName;
        $path = $this->getImageFilepath(false).'/'. $imageEntity->getId().'/'.$baseName;

        $imageInfo = getimagesize($imagePath);


        $width = $imageInfo[0];
        $height = $imageInfo[1];

        $imageEntity->getProperty('width')->setValue($width);
        $imageEntity->getProperty('height')->setValue($height);



        $imageEntity->setValue('path', $path);
        $imageEntity->setValue('url', $url);

        $imageEntity->store();
        $imageEntity->commit();

        return $imageEntity;





        //

    }


    public function saveByBuffer($data)
    {
        $uploader = new ImageUploader();

        $imageBuffer = $data['rawBuffer'];

        $imageName = uniqid();

        $temporaryImagePath = $uploader->saveImageFromBase64(
            $imageBuffer,
            $this->application->get('user-data-filepath-root') . '/tmp',
            $imageName
        );

        return $temporaryImagePath;

    }


    public function saveByURL($data)
    {


        $uploader = new ImageUploader();


        $imageName = uniqid();

        $temporaryImagePath = $uploader->saveImageFromURL(
            $data['imageURL'],
            $this->application->get('user-data-filepath-root') . '/tmp',
            $imageName
        );

        return $temporaryImagePath;
    }



}


