Planck.Extension.Content.Module.Image.View.Component.Gallery = function(container)
{
    if(container) {
        this.setElement(container);
        this.initialize();
        this.loadDataLayerFromDom();
    }



    this.events = {
       thumbnailClick: function(thumbnail) {
            this.showImageDetails(thumbnail);
       }.bind(this)
    };


    var thumbnailComponentName='Planck.Extension.Content.Module.Image.View.Component.Thumbnail'
    this.subComponents[thumbnailComponentName] = [];
    this.thumbnails = this.subComponents[thumbnailComponentName];


    this.overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
    this.overlay.render(document.body);
};


Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.on = function(eventName, callback)
{
   this.events[eventName] = callback;
   return this;
};


Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.initialize = function()
{

    this.parent.initialize.call(this);
    this.initializeDropImageUpload();


    $(this.thumbnails).each(function(index, thumbnail) {
        this.initializeThumbnail(thumbnail);
    }.bind(this));
};

Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.initializeThumbnail = function(thumbnail)
{
    thumbnail.onClick(function(thumbnail) {
        this.events.thumbnailClick(thumbnail);
    }.bind(this));

};




Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.getRemoteCallInstance = function()
{
    var remoteCall = new Planck.Extension.ViewComponent.RemoteComponentLoader('Planck.Extension.Content.Module.Image.View.Component.Gallery');
    remoteCall.addData('dataLayer', this.getDataLayer().serialize());
    return remoteCall;

};





Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.getViewFromRemote = function(callback)
{

    this.parent.getViewFromRemote.call(this,
        'Planck.Extension.Content.Module.Image.View.Component.Gallery',
        null,

        function(descriptor) {
            Planck.Extension.ViewComponent.initialize(this.getElement());

            if(callback) {
                callback(descriptor);
            }
        }.bind(this)
    );

    //remoteCall.addData({})
    //removeCall.execute();

};




Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.showImageDetails = function(thumbnail)
{



    var imageDetail = new Planck.Extension.Content.Module.Image.View.Component.Detail();


    imageDetail.setDataLayer(thumbnail.getDataLayer());
    imageDetail.on('afterSubmit', function(instance) {
        this.overlay.hide();
    }.bind(this));



    imageDetail.getViewFromRemote(function() {
        this.overlay.show(imageDetail.getElement());
    }.bind(this));

    return;
};




Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.addThumbnail = function(dataLayer)
{

    var thumbnail = new Planck.Extension.Content.Module.Image.View.Component.Thumbnail();


    thumbnail.loadDataLayer(dataLayer);


    thumbnail.getViewFromRemote(
        function(descriptor) {
            this.$contentElement.append(thumbnail.getElement());
            this.thumbnails.push(thumbnail);
            this.initializeThumbnail(thumbnail);

        }.bind(this)
    );
};


Planck.Extension.Content.Module.Image.View.Component.Gallery.prototype.initializeDropImageUpload = function()
{

    var imageDropZone = new Planck.Component.DropZone(this.$element);
    imageDropZone.on('upload', function(datalayer) {

        $(datalayer).each(function(index, dataLayerRecord) {
            var dataLayer = {
                image: dataLayerRecord
            };

            this.addThumbnail(dataLayer);
        }.bind(this));

    }.bind(this));



};



Planck.inherit(
    Planck.Extension.Content.Module.Image .View.Component.Gallery,
    Planck.Extension.ViewComponent.Component
);



