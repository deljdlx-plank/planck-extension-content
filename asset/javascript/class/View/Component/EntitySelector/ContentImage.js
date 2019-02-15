Planck.Extension.Content.View.Component.EntitySelector.ContentImage = function(triggerElement)
{
    this.$triggerElement = $(triggerElement);
    this.$triggerElement.hide();

    this.$label = this.getLabel();

    this.$label.html(i18n('<div class="button"><span>Image</span></div>'));

    this.imageId = this.$triggerElement.attr('value');


    this.$valueInput = $('<input name="'+this.$triggerElement.attr('name')+'" value="'+this.imageId+'" style="display: none"/>');
    this.$previewContainer = $('<div class="plk-entity-selector-preview"></div>');

    this.$triggerElement.parent().append(this.$valueInput);
    this.$triggerElement.parent().append(this.$previewContainer);


    this.$label.click(function() {
        this.showImageChooser();
    }.bind(this));

    this.loadPreview(this.imageId);
};

Planck.Extension.Content.View.Component.EntitySelector.ContentImage.prototype.loadPreview = function(imageId)
{
   if(!imageId) {
       return false;
   }

   var url = '?/@extension/planck-extension-entity_editor/entity/api[get]';
   var data = {
       entity: 'Planck\\Extension\\Content\\Model\\Entity\\Image',
       id: imageId
   };
   Planck.ajax({
       url: url,
       method: 'get',
       data: data,
       success: function(response) {
           this.setPreview(response.url);
            //console.log(response);
       }.bind(this)
   });
};

Planck.Extension.Content.View.Component.EntitySelector.ContentImage.prototype.setPreview = function(url)
{
    this.$previewContainer.html('<img src="'+url+'"/>');
};


Planck.Extension.Content.View.Component.EntitySelector.ContentImage.prototype.showImageChooser = function()
{



    var overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
    overlay.render(document.body);


    var imageList = new Planck.Extension.Content.Module.Image.View.Component.Gallery();

    imageList.on('thumbnailClick', function (thumbnail) {
        var imageInstance = thumbnail.getDataLayer().get('image');
        overlay.destroy();

        this.$valueInput.val(imageInstance.getValue('id'));
        this.setPreview(imageInstance.getValue('url'));


    }.bind(this));



    var remoteCall = imageList.getRemoteCallInstance();

    remoteCall.addMethodCall('loadAllImages', {
        parameters: null
    });

    remoteCall.load(function (descriptor) {

        var dom = $(descriptor.getHTML());
        imageList.setElement(dom);

        overlay.show(
            imageList.getElement()
        );
    }.bind(this));
    return false;





};

Planck.inherit(
    Planck.Extension.Content.View.Component.EntitySelector.ContentImage,
    Planck.Extension.EntityEditor.View.Component.EntityChooser
);




//==================================================


if(!isset(Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Image'])) {
    Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Image'] = Planck.Extension.Content.View.Component.EntitySelector.ContentImage;
}
