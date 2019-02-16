Planck.Extension.Content.View.Component.EntitySelector.ContentType = function(triggerElement)
{
    this.$triggerElement = $(triggerElement);
    this.$triggerElement.hide();

    this.$label = this.getLabel();


    this.$label.html(i18n('<div class="button" data-behaviour="interactive"><span>Type</span></div>'));




    this.typeId = this.$triggerElement.attr('value');


    this.$valueInput = $('<input name="'+this.$triggerElement.attr('name')+'" value="'+this.typeId+'" style="display: none"/>');
    this.$previewContainer = $('<div class="plk-entity-selector-preview"></div>');

    this.$triggerElement.parent().append(this.$valueInput);
    this.$triggerElement.parent().append(this.$previewContainer);



    this.$label.click(function() {
        this.showCategorySelector();
    }.bind(this));

    this.loadPreview(this.typeId);
};



Planck.Extension.Content.View.Component.EntitySelector.ContentType.prototype.loadPreview = function(entityId)
{
    if(!entityId) {
        return false;
    }

    var url = '?/@extension/planck-extension-entity_editor/entity/api[get]';
    var data = {
        entity: 'Planck\\Extension\\Content\\Model\\Entity\\Type',
        id: entityId
    };
    Planck.ajax({
        url: url,
        method: 'get',
        data: data,
        success: function(response) {

            this.setPreview(response.name);

        }.bind(this)
    });
};

Planck.Extension.Content.View.Component.EntitySelector.ContentType.prototype.setPreview = function(label)
{
    this.$previewContainer.html('<span>'+label+'</span>');
};



Planck.Extension.Content.View.Component.EntitySelector.ContentType.prototype.showCategorySelector = function()
{
    var overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
    overlay.render(document.body);

    var $content = $('<div class="category-tree-container"></div>')


    this.tree = new Planck.Extension.Content.View.Component.TypeTree();
    this.tree.render($content);

    this.tree.getTree().on('select', function(data) {
        var typeId = data.node.id;
        this.$valueInput.val(typeId);

        this.setPreview(data.node.text);

        overlay.destroy();
    }.bind(this));


    overlay.show($content);
};



Planck.inherit(
    Planck.Extension.Content.View.Component.EntitySelector.ContentType,
    Planck.Extension.EntityEditor.View.Component.EntityChooser
);




//==================================================


if(!isset(Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Type'])) {
    Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Type'] = Planck.Extension.Content.View.Component.EntitySelector.ContentType;
}