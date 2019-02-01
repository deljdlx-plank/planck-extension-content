<?php


namespace Planck\Extension\Content\Module\Image\Router;



use Planck\Extension\Content\Model\Entity\Image;
use Planck\Extension\Content\Module\Image\Controller\Save;
use Planck\Extension\RichTag\Model\Entity\Tag;
use Planck\Extension\ViewComponent\DataLayer;
use Planck\Router;



class Api extends Router
{



    public function registerRoutes()
    {


        $this->post('save-info', '`/content/image/api/save-info`', function () {

            $data = $this->post();


            $image = $this->application->getModel()->getEntity(Image::class);

            if(isset($data['id'])) {
                $image->loadById($data['id']);
            }

            $image->setValues($data);
            if(isset($data['crop'])) {
                $image->getProperty('crop')->setValue($data['crop']);
            }


            $image->store();

            $image->removeAllTags();

            if(isset($data['tags'])) {
                foreach ($data['tags'] as $tagId) {
                    $image->addTag($tagId);
                }
            }




            $dataLayer = new DataLayer();
            $dataLayer->setVariable('image', $image);

            echo json_encode(
                $dataLayer->jsonSerialize(),
                JSON_PRETTY_PRINT
            );






        })->json()
        ->setBuilder('/content/image/api/save-info')

        ;

        $this->post('upload', '`/content/image/api/upload`', function () {


            $files = $this->request->files();

            $controller = new Save();
            $images = [];

            foreach ($files as $file) {
                $imageEntity = $controller->createByFile($file);
                $images[] = $imageEntity;
            }

            $dataLayer = new DataLayer();
            $dataLayer->setVariables($images);

            echo json_encode(
                $dataLayer->jsonSerialize()
            );

            return;

        })->contentType('application/json')
        ->addHeader('Extra-type', 'planck-datalayer');
        ;



        $this->post('save', '`/content/image/api/save`', function() {

            $data = $this->post();

            $controller = new Save($this->application);
            $imageEntity = $controller->execute($data);
            echo json_encode($imageEntity);
            return;



        })->json();










        return parent::registerRoutes();
    }

}