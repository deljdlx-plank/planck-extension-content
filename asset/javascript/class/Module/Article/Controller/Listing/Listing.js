

Planck.Extension.Content.Module.Article.Controller.Listing = function(options)
{

};


Planck.Extension.Content.Module.Article.Controller.Listing.prototype.initialize = function()
{
    $('article .delete-trigger').click(function(event) {
        var articleId = event.target.getAttribute('data-article-id');

        var container = $(event.target).parents('article');

        this.confirmDeleteArticle(articleId, container);
    }.bind(this));

};

Planck.Extension.Content.Module.Article.Controller.Listing.prototype.confirmDeleteArticle = function(articleId, container)
{

    //this.deleteArticle(articleId, container);
    //return;

    var confirm = new Planck.Extension.ViewComponent.View.Component.Confirm(document.body);
    confirm.onConfirm(function() {
        this.deleteArticle(articleId, container);
    }.bind(this))
    confirm.show();

};


Planck.Extension.Content.Module.Article.Controller.Listing.prototype.deleteArticle = function(articleId, container)
{
    var article = new Planck.Extension.Content.Model.Entity.Article();
    article.setValue('id', articleId);
    article.delete();
    $(container).remove();

};

