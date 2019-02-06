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
                    $contentInput = new \Planck\Extension\ViewComponent\View\Element\RichTextInput();
                    $contentInput->setValue($article->getValue('content'));
                    $contentInput->setName('content');
                    echo $contentInput->render();
                    ?>

                </div>
            </div>


        </div>
        <div class="col-3 padding-x-small plk-layout-editor-zone-left">

            <div class="row">


                <div class="col-12 card">
                    <div class="card-body">
                        <div class="card-header">Actions</div>
                        <div>
                            <button>Enregistrer</button>
                        </div>
                    </div>
                </div>

                <div class="col-12 card">
                    <div class="card-body">
                        <div class="card-header">Categorie</div>
                        <div>
                            <div class="category-container"></div>
                        </div>
                    </div>
                </div>



                <div class="col-12 card">
                    <div class="card-body">
                        <div class="card-header">Image principle <i class="fas fa-edit main-image-trigger"></i></div>
                        <div>
                            <div class="image-preview"><?php
                                if($article->hasImage()) {
                                    echo '<img src="'.$article->getImage()->getValue('url').'" style="width: 100%"/>';
                                }
                                ?>
                            </div>
                            <input name="image_id" class="form-data" style="display: none" value="<?php echo $article->getValue('image_id');?>"/>
                        </div>
                    </div>
                </div>










            </div>
        </div>

    </div>





</form>
