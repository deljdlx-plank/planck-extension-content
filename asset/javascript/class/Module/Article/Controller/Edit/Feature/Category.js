Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Category = function(editor)
{
    this.editor = editor;
    this.$element = this.editor.getElement();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Category.prototype.initialize = function()
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
    this.tree.render('.category-container');
};
