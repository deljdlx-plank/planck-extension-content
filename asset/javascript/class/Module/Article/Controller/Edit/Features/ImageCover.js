Planck.Extension.Content.Module.Article.Controller.Edit.Features.ImageCover = function(editor)
{
    this.editor = editor;
    this.image = this.editor.getArticle().getImage();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.ImageCover.prototype.initialize = function()
{

    this.$element = this.getContainer('Image de couverture <i class="fas fa-edit main-image-trigger"></i>', 'image-preview');

    if(this.image.getValue('url')) {

        var image = $('<img src="'+this.image.getValue('url')+'" style="width:100%"/>');
        var inputValue = $('<input name="image_id" class="form-data" style="display: none" value="'+this.image.getValue('id')+'"/>');
        this.$element.find('.image-preview').append(image);
        this.$element.find('.image-preview').append(inputValue);
    }

    this.register('imageCover');

    this.initializeChooseImage();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Features.ImageCover.prototype.initializeChooseImage = function()
{

    this.$element.find('.main-image-trigger').click(function(event) {


        var overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
        overlay.render(document.body);


        var imageList = new Planck.Extension.Content.Module.Image.View.Component.Gallery();


        imageList.on('thumbnailClick', function (thumbnail) {

            var imageInstance = thumbnail.getDataLayer().get('image');


            this.editor.getArticle().setValue('image_id', imageInstance.getId());

            this.$element.find('.image-preview').html(
                '<img src="'+imageInstance.getValue('url')+'" style="width:100%"/>'
            );


            if(this.editor.getArticle().getValue('id')) {
                this.editor.getArticle().store();
            }

            overlay.destroy();

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
    }.bind(this));

};







Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit.Features.ImageCover,
    Planck.Extension.Content.Module.Article.Controller.Edit.Feature
);












