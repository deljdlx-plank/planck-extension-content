

Planck.Extension.Content.Module.Article.Controller.Editor = function(options)
{


    this.$element = $('.plk-article-editor');

    this.modal = new Planck.Modal();
    this.modal.initialize();



    this.article = new Planck.Extension.Content.Model.Entity.Article();



    this.options = $.extend({
        selector: '#article-form'
    }, options);



    this.form= null;
    this.formElement = $(this.options.selector);
};


Planck.Extension.Content.Module.Article.Controller.Editor.prototype.initialize = function()
{


    this.loadComponents();

    this.loadDataLayerFromDom(this.$element);

    this.article = this.getDataLayer().get('article');



    this.article.bindWithForm(this.formElement);
    this.article.loadValuesFromForm();
    this.article.setValue('html', this.$element.find('.plk-rich-text-html-value-container').val());


    this.initializeChooseMainImage();

    this.form = new Khi.AjaxForm(this.formElement);
    this.form.addData('no-redirection', true);


    this.form.on('submit', function() {
        this.saveArticle();
        return false;
    }.bind(this));
};



Planck.Extension.Content.Module.Article.Controller.Editor.prototype.initializeChooseMainImage = function()
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


            //this.insert(imageInstance, thumbnail.getDataLayer());

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





Planck.Extension.Content.Module.Article.Controller.Editor.prototype.saveArticle = function()
{
    this.article.loadValuesFromForm();
    this.article.setValue('html', this.$element.find('.plk-rich-text-html-value-container').val());

    console.log(this.$element.find('.plk-rich-text-html-value-container').val());

    this.article.store(function(data) {

        //this.doAfterArticleSave(data);




    }.bind(this))
    return this;
};



Planck.Extension.Content.Module.Article.Controller.Editor.prototype.doAfterArticleSave = function(data)
{
    this.imageChooser.hasImage();


    if(this.imageChooser.hasImage()) {
        //console.log('hasImage');
        //this.imageChooser.updateImage(this.article);

        this.updateCrop();

    }
    else {
        if(this.imageChooser.hasCropChanged()) {
            this.updateCrop();
        }
    }
};

Planck.Extension.Content.Module.Article.Controller.Editor.prototype.updateCrop = function()
{
   var cropData = this.imageChooser.getCropData();

   var data = {
       property: 'crop',
       value: cropData,
       entity: this.article.getImage().getValues()
   };

   var url = '?/entity-editor/api/set-property';


   Planck.ajax({
        url:url,
        method: 'post',
        data: data,
        success: function(response) {
            console.log(response);
        }

   });

};


Planck.Extension.Content.Module.Article.Controller.Editor.prototype.createImage = function()
{


    this.imageChooser.sendImage({
        url: '?/content/image/api/save',
        data: {},
        callback: function (data) {

            var imageInstance = new Planck.Extension.Content.Model.Entity.Image();
            imageInstance.setValues(data);
            this.article.setImage(imageInstance);
            this.article.store();

            alert('moo');

            //this.article.getImage().setValues(data);

            console.log(this.article);

        }.bind(this)
    });

};

Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Editor,
    Planck.Controller
);

