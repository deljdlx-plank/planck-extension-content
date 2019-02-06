Planck.Extension.Content.Module.Article.Controller.Edit.Feature.ImageCover = function(editor)
{
    this.editor = editor;
    this.$element = this.editor.getElement();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature.ImageCover.prototype.initialize = function()
{
    this.initializeChooseImage();
};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature.ImageCover.prototype.initializeChooseImage = function()
{

    this.$element.find('.main-image-trigger').click(function(event) {


        var overlay = new Planck.Extension.ViewComponent.View.Component.Overlay();
        overlay.render(document.body);


        var imageList = new Planck.Extension.Content.Module.Image.View.Component.Gallery();


        imageList.on('thumbnailClick', function (thumbnail) {

            var imageInstance = thumbnail.getDataLayer().get('image');

            this.$element.find('*[name=image_id]').val(imageInstance.getId());
            this.$element.find('.image-preview').html(
                '<img src="'+imageInstance.getValue('url')+'" style="width:100%"/>'
            );

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

}