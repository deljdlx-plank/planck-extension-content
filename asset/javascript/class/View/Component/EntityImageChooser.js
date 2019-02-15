Planck.Extension.Content.View.Component.EntityImageChooser = function(triggerElement)
{
   this.$triggerElement = $(triggerElement);


   //this.$label = this.$triggerElement.parents('.plk-field-container').find('label');

    this.$label = this.getLabel();

    console.log(this.$label);

   this.$label.html(i18n('Image associée'));




   this.imageId = this.$triggerElement.attr('value');


   this.$valueInput = $('<input name="'+this.$triggerElement.attr('name')+'" value="'+this.imageId+'" style="display: none"/>');

    this.$previewContainer = $('<div class="plk-entity-chooser-image-preview"></div>');


    this.$triggerElement.parent().append(this.$valueInput);
    this.$triggerElement.parent().append(this.$previewContainer);



    this.$triggerElement.click(function() {
        this.showImageChooser();
    }.bind(this));

};


Planck.Extension.Content.View.Component.EntityImageChooser.prototype.showImageChooser = function()
{








    var overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
    overlay.render(document.body);


    var imageList = new Planck.Extension.Content.Module.Image.View.Component.Gallery();

    imageList.on('thumbnailClick', function (thumbnail) {
        var imageInstance = thumbnail.getDataLayer().get('image');
        overlay.destroy();

        this.$valueInput.val(imageInstance.getValue('id'));

        this.$previewContainer.html('<img src="'+imageInstance.getValue('url')+'"/>');


    }.bind(this));



    var remoteCall = imageList.getRemoteCallInstance();

    remoteCall.addMethodCall('loadAllImages', {
        parameters: null
    });

    remoteCall.execute(function (descriptor) {

        var dom = $(descriptor.getHTML());
        imageList.setElement(dom);

        overlay.show(
            imageList.getElement()
        );
    }.bind(this));
    return false;





};

Planck.inherit(
    Planck.Extension.Content.View.Component.EntityImageChooser,
    Planck.Extension.EntityEditor.View.Component.EntityChooser
);




//==================================================


if(!isset(Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Image'])) {
    Planck.Extension.EntityEditor.entityMapping['Planck\\Extension\\Content\\Model\\Entity\\Image'] = Planck.Extension.Content.View.Component.EntityImageChooser;
}
