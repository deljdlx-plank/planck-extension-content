<?php

namespace Planck\Extension\Content\Model\Entity;


use Planck\Extension\RichTag\Model\Traits\HasTags;
use Planck\Model\Entity;
use Planck\Model\GenericObjectProperty;
use Planck\Model\Traits\HasImage;
use Planck\Model\Traits\HasProperties;

class Image extends Entity
{
    use HasTags;
    use HasProperties;




    public function __construct($repository = null)
    {

        parent::__construct($repository);

        $this->addProperty(new GenericObjectProperty(array(
            'name' => 'crop',
            'type' => 'json',
            'defaultValue' => array(

            )
        )));

        $this->addProperty(new GenericObjectProperty(array(
            'name' => 'width',
            'type' => 'int',
        )));

        $this->addProperty(new GenericObjectProperty(array(
            'name' => 'height',
            'type' => 'int',
        )));

    }



    public function noCropCSSProperties()
    {

        $css = '
            background-repeat: no-repeat;
            background-position: 50% 50%;
            background-size: cover;
            background-image: url('.$this->getValue('url').');
        ';
        return $css;
    }





    public function getCSSCropProperties($width = null, $height = null)
    {



        $cropData = $this->getProperty('crop')->getValue();

        if(empty($cropData) || 1) {
            return $this->noCropCSSProperties($width, $height);
        }



        $originalWidth = $this->getProperty('width')->getValue();
        $originalHeight = $this->getProperty('height')->getValue();

        if(!$originalWidth || !$originalHeight) {

            $imageInfo = getimagesize($this->getApplication()->getFilepathRoot().'/'.$this->getValue('path'));
            $originalWidth = $imageInfo[0];
            $originalHeight = $imageInfo[1];
            $this->getProperty('width')->setValue($width);
            $this->getProperty('height')->setValue($height);



        }




        $ratioX = 0;
        if($width) {
            $ratioX = $width/$cropData['width'];
        }
        $ratioY = 0;
        if($height) {
            $ratioY = $height/$cropData['height'];
        }

        $ratio = max($ratioX, $ratioY);


        if(!$width) {
            $backgroundWidth = 'auto';
        }
        else {
            $backgroundWidth = round($originalWidth*$ratio);
        }

        if(!$height) {
            $backgroundHeight = 'auto';
        }
        else {
            $backgroundHeight = round($originalHeight*$ratio);
        }

        if(!$width && !$height) {
            $size = 'background-size: cover;';
        }
        else {
            $size = 'background-size: ';
            $size .= $backgroundWidth;
            if($width) {
                $size .='px';
            }
            $size .= ' '.$backgroundHeight;
            if($height) {
                $size .='px';
            }
            $size .=';';

        }



        /*
        if($width) {
            $xPosition = round($cropData->focusPointXRatio * $backgroundWidth * -1)
                + $cropData->width * $ratio / 2
                . 'px';
        }
        else {
            if($ratio) {

                $backgroundWidth = round($cropData->originalWidth*$ratio);

                $xPosition = round($cropData->focusPointXRatio * $backgroundWidth * -1)
                    + $cropData->width * $ratio / 2
                    . 'px';

            }
            else {
                $xPosition = round($cropData->focusPointXRatio*100).'%';
            }
        }
        */
        //$size = 'background-size: cover;';
        $xPosition = round($cropData['focusPointXRatio']*100).'%';


        if($height) {
            $yPosition = round($cropData['focusPointYRatio']*$backgroundHeight*-1)
                +$cropData['height']*$ratio/2
                .'px';
        }
        else {
            if($ratio) {
                $backgroundHeight = round($cropData['originalHeight']*$ratio);

                $yPosition = round($cropData['focusPointYRatio'] * $backgroundHeight * -1)
                    + $cropData['width'] * $ratio / 2
                    . 'px';
            }
            else {
                $yPosition = round($cropData['focusPointYRatio']*100).'%';
            }
        }

        $position = 'background-position: '.$xPosition.' '.$yPosition.';';


        $css = '
            background-repeat: no-repeat;
            '.$size.'
            '.$position.'
            
            
            background-image: url('.$this->getValue('url').');
        ';

        return $css;
    }




}
