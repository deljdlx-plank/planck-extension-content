Planck.Extension.Content.Module.Article.Controller.Edit.Features.QName = function(editor)
{
    this.editor = editor;
    this.article = this.editor.getArticle();

    this.article.onStore(function() {
    }.bind(this));

};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.QName.prototype.initialize = function()
{

    this.$element = this.getContainer('Identifiant unique', 'qname_input_container');

    this.register('qname');

    var $container = $(
        '<div style="display:flex"></div>'
    );

    this.$element.$content.html($container)


    this.$input = $('<input name="qname" style="flex:1" class="form-data"/>');
    this.$submitButton = $('<button style="">ok</button>');

    this.$input.val(this.article.getValue('qname'));


    $container.append(this.$input);
    $container.append(this.$submitButton);

    this.$submitButton.click(function() {
        this.updateArticleQName();
    }.bind(this));
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.QName.prototype.updateArticleQName = function()
{
    var value = this.$input.val();


    if(this.article.getValue('id')) {
        this.article.setValue('qname', value);
        this.article.store();
    }

    return this;
};



Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.QName,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);










