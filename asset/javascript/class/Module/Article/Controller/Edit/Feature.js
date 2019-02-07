Planck.Extension.Content.Module.Article.Controller.Edit.Features = {};



Planck.Extension.Content.Module.Article.Controller.Edit.Feature = function()
{

};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature.prototype.getContainer = function(title, contentClassName)
{
    var $element = $(
        '<div class="card">'+
            '<div class="card-body">'+
                '<div class="card-header">'+title+'</div>'+
                '<div class="'+contentClassName+'"></div>'+
            '</div>'+
        '</div>'
    );

    $element.$content = $element.find('.'+contentClassName);

    return $element;


};

Planck.Extension.Content.Module.Article.Controller.Edit.Feature.prototype.register = function(name)
{
    this.editor.getModuleContainer().addComponent(this, name);
};



Planck.Extension.Content.Module.Article.Controller.Edit.Feature.prototype.getElement = function()
{
    return this.$element;
};

