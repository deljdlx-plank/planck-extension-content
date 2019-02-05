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
