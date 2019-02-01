





<div class="row  ">

    <div class="col-6">

        <form method="post" action="<?php echo $saveArticleURL;?>" id="article-form">

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



            <div class="row">
                <div class="col-12">
                    <button>Enregistrer</button>
                </div>
            </div>
        </form>


        <div class="editor-preview"></div>

    </div>


    <div class="col-6">

        <div class="plk-component-blot-editor">
            <input name="blot-name" value="plk-blot-image-edition"/>
            <textarea name="blot-attributes">{
                "src": "https://static1.visitestonia.com/images/2890339/Estonian_forest_reasons_to_visit_Sven_Zacek.jpg",
                "language": "php"
            }</textarea>
            <button class="blot-insert-trigger">Insert</button>
        </div>

        <div class="plk-blot-edit-container">

        </div>


    </div>


</div>


























<!--
    <div class="col-3  form-container">
        <input class="material1" type="text" placeholder="Placeholder Text">
        <span class="focus-border"></span>
    </div>
//-->
