Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category = function(editor)
{
    this.editor = editor;

    /**
     * {Planck.Extension.ViewComponent.View.Component.EntityTree}
     */
    this.tree;
    this.ready = false;
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category.prototype.initialize = function()
{

    this.$element = this.getContainer('Categorie', 'category_input_container');

    this.initializeTree();

    this.register('category');



};

Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category.prototype.initializeTree = function()
{

    this.categorySelector = new Planck.Extension.Content.View.Component.CategoryTree();
    this.tree = this.categorySelector.getTree();

    this.tree.on('load', function() {
        this.tree.selectNodeById(
            this.editor.getArticle().getValue('category_id')
        );
        this.ready = true;
    }.bind(this));

    this.tree.on('select', function(data) {
        this.editor.getArticle().setValue('category_id', data.node.id);
        if(this.editor.getArticle().getValue('id')) {
            if(this.ready) {
                this.editor.getArticle().store();
            }
        }
    }.bind(this));

    this.categorySelector.render(
        this.$element.find('.category_input_container')
    );

    return this.categorySelector;

};



Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);










