



Planck.Extension.Content.Module.Image.View.Component.Thumbnail = function(container)
{
    if(container) {
        this.setElement(container);
        this.initialize();
        this.loadDataLayerFromDom();
    }


};




Planck.Extension.Content.Module.Image.View.Component.Thumbnail.prototype.initialize = function()
{

    this.parent.initialize.call(this);

    var image = this.getDataLayer().get('image');
    if(image) {
        this.image = image;
    }

    this.initializeDeleteButton();

};

Planck.Extension.Content.Module.Image.View.Component.Thumbnail.prototype.initializeDeleteButton = function()
{
    this.getToolbar().getDeleteButton().click(function(event) {

        var confirm = new Planck.Extension.ViewComponent.View.Component.Confirm(document.body);
        confirm.show();
        confirm.onConfirm(function() {
            this.image.delete(function() {
                this.destroy();
            }.bind(this));
        }.bind(this));


        event.stopPropagation();



    }.bind(this));

};




Planck.Extension.Content.Module.Image.View.Component.Thumbnail.prototype.image = new Planck.Extension.Content.Model.Entity.Image();


Planck.Extension.Content.Module.Image.View.Component.Thumbnail.prototype.getImage = function()
{
   return this.image;
};



Planck.Extension.Content.Module.Image.View.Component.Thumbnail.prototype.getViewFromRemote = function(callback)
{

    return this.parent.getViewFromRemote.call(
        this,
        'Planck.Extension.Content.Module.Image.View.Component.Thumbnail',
        callback
    );
};







Planck.inherit(
    Planck.Extension.Content.Module.Image .View.Component.Thumbnail,
    Planck.Extension.ViewComponent.Component
);

