Planck.Extension.Content.Module.Article.Controller.Edit.Layout.ModuleContainer = function(editor, selector)
{
    this.editor = editor;
    this.$element = $(selector);

    this.components = {};


};

Planck.Extension.Content.Module.Article.Controller.Edit.Layout.ModuleContainer.prototype.addComponent = function(component, name)
{
    this.components[name] = component;


    this.$element.append(
       component.getElement()
    );


};


