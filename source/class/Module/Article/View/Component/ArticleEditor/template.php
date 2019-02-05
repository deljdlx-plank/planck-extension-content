
<div class="row  ">

    <div class="col-12">


        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="editor-tab" data-toggle="tab" href="#editor-panel" role="tab" aria-controls="editor-panel" aria-selected="true">Edition</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="preview-tab" data-toggle="tab" href="#preview-panel" role="tab" aria-controls="preview-panel" aria-selected="false">Prévisualisation</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="code-tab" data-toggle="tab" href="#code-panel" role="tab" aria-controls="ode-panel" aria-selected="false">Code</a>
            </li>
        </ul>


        <div class="tab-content" id="myTabContent">

            <div id="editor-panel" class="tab-pane fade show active"  role="tabpanel" aria-labelledby="editor-tab">
                <?php echo $this->obinclude(__DIR__.'/_edition.php', $this->getVariables());?>
            </div>

            <div id="preview-panel" class="tab-pane fade"  role="tabpanel" aria-labelledby="preview-tab">
                <div class="editor-preview"></div>
            </div>

            <div id="code-panel" class="tab-pane fade"  role="tabpanel" aria-labelledby="code-tab">
                <div class="plk-component-blot-editor">
                    <input name="blot-name" value="plk-blot-image-edition"/>
                    <textarea name="blot-attributes">{
                "src": "https://static1.visitestonia.com/images/2890339/Estonian_forest_reasons_to_visit_Sven_Zacek.jpg",
                "language": "php"
            }</textarea>
                    <button class="blot-insert-trigger ">Insert</button>
                </div>
            </div>


        </div>

    </div>


    <div class="col-6">



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
