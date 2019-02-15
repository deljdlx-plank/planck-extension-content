Planck.Extension.Content.View.Component.CategoryTree = function()
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