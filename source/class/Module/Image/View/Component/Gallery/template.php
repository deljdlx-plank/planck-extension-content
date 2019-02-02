<?php

foreach ($images as $image) {

    $thumbnail = new \Planck\Extension\Content\Module\Image\View\Component\Thumbnail();
    $thumbnail->setImage($image);
    echo $thumbnail->render();
}

?>

