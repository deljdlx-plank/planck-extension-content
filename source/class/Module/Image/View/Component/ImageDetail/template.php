<?php
/**
 * @
 */
?>

<div class="plk-image-detail-container">
    <div class="plk-image-detail-toolbar">
        <i class="fas fa-crop"></i>
    </div>

    <div  class="plk-image-detail-layout">

        <div class="plk-image-detail-preview" style="max-width:70%">
            <img src="<?php echo $image->getValue('url');?>" style="max-width:100%"/>
        </div>
        <div class="plk-image-detail-info">
            <form action="<?php echo $saveURL;?>" method="post" class="image-data-form">


                <input name="id"value="<?php echo $image->getId();?>" class="form-data" type="hidden"/>

                <div>
                    <input name="title" placeholder="<?php echo $this->i18n('Titre');?>" value="<?php echo $image->getValue('title');?>" class="form-data"/>
                </div>

                <div>
                    <input name="url" placeholder="<?php echo $this->i18n('url');?>" value="<?php echo $image->getValue('url');?>" class="form-data"  type="hidden"/>
                </div>

                <div>
                    <textarea name="presentation" class="form-data" placeholder="Présentation"><?php $this->display($image->getValue('presentation'));?></textarea>
                </div>

                <div>
                    <?php
                    $tagInput = new \Planck\Extension\RichTag\View\Element\TagInput();
                    $tags = $image->getTags();



                    foreach ($tags as $tag) {

                        $tagInput->addValue($tag->getId());
                    }


                    echo $tagInput->render();
                    //$tagInput->setSource('?/tool/fixture/get');


                    ?>
                </div>


                <div>
                    <button>Enregistrer</button>
                </div>


            </form>
        </div>
    </div>
</div>