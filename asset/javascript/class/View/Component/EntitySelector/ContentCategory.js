Planck.Extension.Content.View.Component.EntitySelector.ContentCategory = function(triggerElement)
{
    this.$triggerElement = $(triggerElement);
    this.$triggerElement.hide();



    this.$label = this.getLabel();


    this.$label.html(i18n('<div class="button"data-behaviour="interactive" ><span>Catégorie</span></div>'));




    this.categoryId = this.$triggerElement.attr('value');


    this.$valueInput = $('<input name="'+this.$triggerElement.attr('name')+'" value="'+this.categoryId+'" style="display: none"/>');

    this.$previewContainer = $('<div class="plk-entity-selector-preview"></div>');
    this.$triggerElement.parent().append(this.$valueInput);
    this.$triggerElement.parent().append(this.$previewContainer);



    this.$label.click(function() {
        this.showCategorySelector();
    }.bind(this));

    this.loadPreview(this.categoryId)

};

Planck.Extension.Content.View.Component.EntitySelector.ContentCategory.prototype.loadPreview = function(categoryId)
{
    if(!categoryId) {
        return false;
    }

    var url = '?/@extension/planck-extension-entity_editor/entity/api[get]';
    var data = {
        entity: 'Planck\\Extension\\Content\\Model\\Entity\\Category',
        id: categoryId
    };
    Planck.ajax({
        url: url,
        method: 'get',
        data: data,
        success: function(response) {

            this.setPreview(response.values.name);

        }.bind(this)
    });
};


Planck.Extension.Content.View.Component.EntitySelector.ContentCategory.prototype.setPreview = function(label)
{
    this.$previewContainer.html('<span>'+label+'</span>');
};



Planck.Extension.Content.View.Component.EntitySelector.ContentCategory.prototype.showCategorySelector = function()
{

    var $content = $('<div class="category-tree-container"></div>')

    var floatingBox = new Planck.Extension.ViewComponent.View.Component.FloatingBox(
        this.$label,
        $content
    );

    this.tree = new Planck.Extension.Content.View.Component.CategoryTree();
    this.tree.render($content);
    this.tree.getTree().on('select', function(data) {
        var categoryId = data.node.id;

        this.$valueInput.val(categoryId);
        this.setPreview(data.node.text);
        floatingBox.destroy();
    }.bind(this));

    floatingBox.show();

};



Planck.inherit(
    Planck.Extension.Content.View.Component.EntitySelector.ContentCategory,
    Planck.Extension.EntityEditor.View.Component.EntityChooser
);




//==================================================


if(!isset(Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Category'])) {
    Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Category'] = Planck.Extension.Content.View.Component.EntitySelector.ContentCategory;
}