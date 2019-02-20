Planck.Extension.Content.View.Component.CategoryTree = function()
{
    var options = {
        sourceURL: '?/content/category/api/get-tree',
        createNodeURL: '?/content/category/api/save',
        renameNodeURL: '?/content/category/api/save',
        moveNodeURL: '?/content/category/api/move',
        deleteURL: '?/content/category/api/delete',
        deleteBranchURL: '?/content/category/api/delete-branch',
    };

    this.tree = new Planck.Extension.ViewComponent.View.Component.EntityTree(options)


};


Planck.Extension.Content.View.Component.CategoryTree.prototype.render = function(container)
{

    this.$container = $(container);
    this.tree.render(this.$container);
};

Planck.Extension.Content.View.Component.CategoryTree.prototype.getTree = function()
{
    return this.tree;
};