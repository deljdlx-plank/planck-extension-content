Planck.Extension.Content.View.Component.TypeTree = function()
{
    var options = {
        sourceURL: '?/type/api/get-tree',
        createNodeURL: '?/type/api/save',
        renameNodeURL: '?/type/api/save',
        moveNodeURL: '?/type/api/move',
        deleteURL: '?/type/api/delete',
        deleteBranchURL: '?/type/api/delete-branch',
    };

    this.tree = new Planck.Extension.ViewComponent.View.Component.EntityTree(options)


    this.tree.on('load', function() {
    }.bind(this));


    this.tree.on('select', function(data) {
    }.bind(this));
};


Planck.Extension.Content.View.Component.TypeTree.prototype.render = function(container)
{

    this.$container = $(container);
    this.tree.render(this.$container);
};

Planck.Extension.Content.View.Component.TypeTree.prototype.getTree = function()
{
    return this.tree;
};