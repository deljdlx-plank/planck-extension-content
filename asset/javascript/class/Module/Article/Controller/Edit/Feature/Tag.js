Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Tag = function(editor)
{
    this.services = {
        tag: {
            save: {
                url:'?/content/article/api/save-tags',
                method: 'post'
            }
        }
    };




    this.editor = editor;
    this.$element = this.editor.getElement();
    this.article = this.editor.getArticle();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Tag.prototype.initialize = function()
{

    //this.getViewFromRemote('');

    var component = new Planck.Extension.ViewComponent.Component();


    var loader = component.getRemoteCallInstance('Planck\\Extension\\RichTag\\View\\Component\\EntityTagInput');
    loader.addMethodCall('loadEntityById', [
            'Planck\\Extension\\Content\\Model\\Entity\\Article',
            this.article.getValue('id')
        ]
    );

    loader.execute(function(response) {


        var container = $(
            //'<div class="col-12" style="min-height: 40px;">'+
            '<div class="card">'+
            '<div class="card-body">'+
            '<div class="card-header">Tags</div>'+
            '<div class="tag_input_container"></div>'+
            '</div>'+
            '</div>'
            //'</div>'
        );




        var tagInputElement = $(response.html);

        container.find('.tag_input_container').append(tagInputElement);

        $('.plk-layout-editor-zone-left').append(container);

        this.$tagManager = new Planck.Extension.Redactor.View.FormElement.TagInput(tagInputElement);
        this.$tagManager.initialize();

        this.$tagManager.on('change', function(tagManager) {
            this.updateTags(tagManager);
        }.bind(this))

    }.bind(this));

};

Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Tag.prototype.updateTags = function()
{
    if(!this.article.getValue('id')) {
        return false;
    }
    var data = {
        article: this.article.getValues(),
        tags: this.$tagManager.getValues()
    };

    Planck.ajax({
        url: this.services.tag.save.url,
        method: this.services.tag.save.method,
        data: data,
        success: function(reponse) {

        }.bind(this)
    });

    console.log(data);

};


