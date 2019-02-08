Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category = function(editor)
{
    this.editor = editor;

    /**
     * {Planck.Extension.ViewComponent.View.Component.EntityTree}
     */
    this.tree;
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category.prototype.initialize = function()
{

    this.$element = this.getContainer('Categorie', 'category_input_container');

    this.initializeTree();

    this.register('category');



};

Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category.prototype.initializeTree = function()
{
    var options = {
        sourceURL: '?/category/api/get-tree',
        createNodeURL: '?/category/api/save',
        renameNodeURL: '?/category/api/save',
        moveNodeURL: '?/category/api/move',
        deleteURL: '?/category/api/delete',
        deleteBranchURL: '?/category/api/delete-branch',
    };

    this.tree = new Planck.Extension.ViewComponent.View.Component.EntityTree(options)


    this.tree.on('load', function() {
        this.tree.selectNodeById(
            this.editor.getArticle().getValue('category_id')
        );
    }.bind(this));


    this.tree.on('select', function(data) {
        this.editor.getArticle().setValue('category_id', data.node.id);
        if(this.editor.getArticle().getValue('id')) {
            this.editor.getArticle().store();
        }
    }.bind(this));

    this.tree.render(
        this.$element.find('.category_input_container')
    );
};



Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.Category,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);









