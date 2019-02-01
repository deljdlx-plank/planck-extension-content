Planck.Extension.Content.Module.Image.Controller.List = function()
{
    this.$element = $('.plk-image-list');


    var thumbnailComponentName='Planck.Extension.Content.Module.Image.View.Component.Thumbnail'
    this.components[thumbnailComponentName] = [];
    this.thumbnails = this.components[thumbnailComponentName];


};

Planck.Extension.Content.Module.Image.Controller.List.prototype.initialize = function()
{
    Planck.Controller.prototype.initialize.call(this);

};





Planck.inherit(
    Planck.Extension.Content.Module.Image.Controller.List,
    Planck.Controller
);




