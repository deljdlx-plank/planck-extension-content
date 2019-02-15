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


    this.tree.on('load', function() {
        this.tree.selectNodeById(
            //this.editor.getArticle().getValue('category_id')
        );
        this.ready = true;
    }.bind(this));


    this.tree.on('select', function(data) {
        /*
        this.editor.getArticle().setValue('category_id', data.node.id);
        if(this.editor.getArticle().getValue('id')) {
            if(this.ready) {
                this.editor.getArticle().store();
            }
        }
        */
    }.bind(this));


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