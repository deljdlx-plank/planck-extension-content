<?php
/**
 * @var \Planck\Extension\Content\Model\Entity\Article $article
 */
?>
<form method="post" action="<?php echo $saveArticleURL;?>" id="article-form">

    <div class="row  ">
        <div class="col-9 padding-x-small">



            <div class="row  ">


                <input name="id"  value="<?php echo $article->getId();?>" class="form-data" type="hidden"/>


                <div class="col-12">
                    <input  class="form-data" type="text" placeholder="Titre" name="title" value="<?php echo $article->getValue('title');?>"/>
                </div>


                <div class="col-12">

                    <?php
                    $contentInput = new \Planck\Extension\FormComponent\View\Component\RichTextInput();
                    $contentInput->setValue($article->getValue('content'));
                    $contentInput->setName('content');
                    echo $contentInput->render();
                    ?>

                </div>
            </div>


        </div>


        <div class="col-3 padding-x-small plk-layout-editor-zone-right"></div>

    </div>





</form>
