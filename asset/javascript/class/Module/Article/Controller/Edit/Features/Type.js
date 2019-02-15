Planck.Extension.Content.Module.Article.Controller.Edit.Features.Type = function(editor)
{
    this.editor = editor;

    /**
     * {Planck.Extension.ViewComponent.View.Component.EntityTree}
     */
    this.tree;
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.Type.prototype.initialize = function()
{

    this.$element = this.getContainer('Type', 'type_input_container');

    this.initializeTree();

    this.register('type');

    this.ready = false;

};

Planck.Extension.Content.Module.Article.Controller.Edit.Features.Type.prototype.initializeTree = function()
{

    this.typeSelector = new Planck.Extension.Content.View.Component.TypeTree();
    this.tree = this.typeSelector.getTree();


    this.tree.on('load', function() {
        this.tree.selectNodeById(
            this.editor.getArticle().getValue('type_id')
        );
        this.ready = true;
    }.bind(this));


    this.tree.on('select', function(data) {
        this.editor.getArticle().setValue('type_id', data.node.id);
        if(this.editor.getArticle().getValue('id')) {
            if(this.ready) {
                this.editor.getArticle().store();
            }

        }
    }.bind(this));

    this.tree.render(
        this.$element.find('.type_input_container')
    );

    return this.typeSelector;


};



Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.Type,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);










