

Planck.Extension.Content.Module.Article.Controller.Edit = function(options)
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


    this.features = {};
};


Planck.Extension.Content.Module.Article.Controller.Edit.Feature = {};




Planck.Extension.Content.Module.Article.Controller.Edit.prototype.getElement = function()
{
   return this.$element;
};

Planck.Extension.Content.Module.Article.Controller.Edit.prototype.getArticle = function()
{
    return this.getDataLayer().get('article');
};



Planck.Extension.Content.Module.Article.Controller.Edit.prototype.loadFeature = function(featureName, featureInstance)
{
   this.features[featureName] = featureInstance;
   return this;
};

Planck.Extension.Content.Module.Article.Controller.Edit.prototype.initialize = function()
{


    this.loadComponents();

    this.loadDataLayerFromDom(this.$element);

    this.article = this.getDataLayer().get('article');

    this.article.bindWithForm(this.formElement);
    this.article.loadValuesFromForm();
    this.article.setValue('html', this.$element.find('.plk-rich-text-html-value-container').val());


    this.intializeForm();



    var imageCoverFeature = new Planck.Extension.Content.Module.Article.Controller.Edit.Feature.ImageCover(this);
    imageCoverFeature.initialize();
    this.loadFeature('imageCover', imageCoverFeature);

    var tagFeature = new Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Tag(this);
    tagFeature.initialize();
    this.loadFeature('tag', tagFeature);

    var categoryFeature = new Planck.Extension.Content.Module.Article.Controller.Edit.Feature.Category(this);
    categoryFeature.initialize();
    this.loadFeature('category', categoryFeature);




};






Planck.Extension.Content.Module.Article.Controller.Edit.prototype.intializeForm = function()
{
    this.form = new Khi.AjaxForm(this.formElement);
    this.form.addData('no-redirection', true);


    this.form.on('submit', function() {
        this.saveArticle();
        return false;
    }.bind(this));
};







Planck.Extension.Content.Module.Article.Controller.Edit.prototype.saveArticle = function()
{
    this.article.loadValuesFromForm();
    this.article.setValue('html', this.$element.find('.plk-rich-text-html-value-container').val());

    console.log(this.$element.find('.plk-rich-text-html-value-container').val());

    this.article.store(function(data) {

        //this.doAfterArticleSave(data);




    }.bind(this))
    return this;
};



Planck.Extension.Content.Module.Article.Controller.Edit.prototype.doAfterArticleSave = function(data)
{

};




Planck.inherit(
    Planck.Extension.Content.Module.Article.Controller.Edit,
    Planck.Controller
);










//====================old
Planck.Extension.Content.Module.Article.Controller.Edit.prototype.updateCrop = function()
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


Planck.Extension.Content.Module.Article.Controller.Edit.prototype.createImage = function()
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

