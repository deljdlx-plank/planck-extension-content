Planck.Extension.Content.Module.Image.Controller.Gallery = function()
{
    this.$element = $('.plk-image-list');


    var thumbnailComponentName='Planck.Extension.Content.Module.Image.View.Component.Thumbnail'
    this.components[thumbnailComponentName] = [];
    this.thumbnails = this.components[thumbnailComponentName];


};

Planck.Extension.Content.Module.Image.Controller.Gallery.prototype.initialize = function()
{
    Planck.Controller.prototype.initialize.call(this);

};





Planck.inherit(
    Planck.Extension.Content.Module.Image.Controller.Gallery,
    Planck.Controller
);




