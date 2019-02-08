Planck.Extension.Content.Module.Article.Controller.Edit.Features.CommonAction = function(editor)
{

    this.editor = editor;
    this.article = this.editor.getArticle();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.CommonAction.prototype.initialize = function()
{
    this.$element = this.getContainer('Actions', 'commonAction');

    this.$saveButton = $('<button>Enregistrer</button>');
    this.$saveButton.click(function() {
        this.saveArticle(this.article);
    }.bind(this));


    this.$element.$content.append(this.$saveButton);
    this.register('commonAction');
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.CommonAction.prototype.saveArticle = function()
{
    this.article.loadValuesFromForm();
    this.article.setValue(
        'html',
        this.editor.getElement().find('.plk-rich-text-html-value-container').val()
    );


    this.article.store(function(data) {

    });

};




Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.CommonAction,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);





