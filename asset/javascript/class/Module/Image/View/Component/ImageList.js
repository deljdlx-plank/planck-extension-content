Planck.Extension.Content.Module.Image.View.Component.ImageList = function(container)
{
    if(container) {
        this.setElement(container);
        this.initialize();
        this.loadDataLayerFromDom();
    }

    this.services = {
       uploadImage: {
           url:'?/content/image/api/upload'
       }
    };


    this.events = {
       thumbnailClick: function(thumbnail) {

            this.showImageDetails(thumbnail);
            //this.getImageDetails();
       }.bind(this)
    };


    var thumbnailComponentName='Planck.Extension.Content.Module.Image.View.Component.Thumbnail'
    this.subComponents[thumbnailComponentName] = [];
    this.thumbnails = this.subComponents[thumbnailComponentName];


    this.overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
    this.overlay.render(document.body);
};


Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.on = function(eventName, callback)
{
   this.events[eventName] = callback;
   return this;
};


Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.initialize = function()
{

    this.parent.initialize.call(this);
    this.initializeDropImageUpload();


    $(this.thumbnails).each(function(index, thumbnail) {
        this.initializeThumbnail(thumbnail);
    }.bind(this));
};

Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.initializeThumbnail = function(thumbnail)
{
    thumbnail.onClick(function(thumbnail) {
        this.events.thumbnailClick(thumbnail);
    }.bind(this));

};




Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.getRemoteCallInstance = function()
{
    var remoteCall = new Planck.Extension.ViewComponent.ComponentRemoteCall('Planck.Extension.Content.Module.Image.View.Component.ImageList');
    remoteCall.addData('dataLayer', this.getDataLayer().serialize());
    return remoteCall;

};





Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.getViewFromRemote = function(callback)
{

    this.parent.getViewFromRemote.call(this,
        'Planck.Extension.Content.Module.Image.View.Component.ImageList',
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




Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.showImageDetails = function(thumbnail)
{


    var imageDetail = new Planck.Extension.Content.Module.Image.View.Component.ImageDetail();


    imageDetail.setDataLayer(thumbnail.getDataLayer());
    imageDetail.on('afterSubmit', function(instance) {
        this.overlay.hide();
    }.bind(this));



    imageDetail.getViewFromRemote(function() {
        this.overlay.show(imageDetail.getElement());
    }.bind(this));

    return;
};




Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.addThumbnail = function(dataLayer)
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


Planck.Extension.Content.Module.Image.View.Component.ImageList.prototype.initializeDropImageUpload = function()
{


    this.$element.on("dragover", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).addClass('dragging');
    });

    this.$element.on("dragleave", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).removeClass('dragging');
    });

    this.$element.on("drop", function(event) {


        var originalEvent = event.originalEvent;

        var url = this.services.uploadImage.url;

        for(var i = 0 ; i<originalEvent.dataTransfer.items.length; i++) {
            var type = originalEvent.dataTransfer.items[i].kind;

            console.log('penser à customiser upload en fct du type '+type);

            if(type === 'file') {
                var file = originalEvent.dataTransfer.items[i].getAsFile();

                var uploader = new Planck.FileUploader(file);

                uploader.send(url, function(datalayer) {

                    $(datalayer).each(function(index, dataLayerRecord) {

                        var dataLayer = {
                            image: dataLayerRecord
                        };

                        this.addThumbnail(dataLayer);
                    }.bind(this));

                }.bind(this));

            }
        }



        event.preventDefault();
        event.stopPropagation();
    }.bind(this));

};



Planck.inherit(
    Planck.Extension.Content.Module.Image .View.Component.ImageList,
    Planck.Extension.ViewComponent.Component
);



