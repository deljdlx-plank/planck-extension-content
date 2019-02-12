Planck.Extension.Content.Model.Entity.Article = function ()
{
    this.image = new Planck.Extension.Content.Model.Entity.Image();

    this.repository = new Planck.Extension.Content.Model.Repository.Article();

};


Planck.Extension.Content.Model.Entity.Article.prototype.image = null;
//Planck.Extension.Content.Model.Entity.Article.prototype.repository =

/**
 *
 * @returns {Planck.Extension.Content.Model.Entity.Image}
 */
Planck.Extension.Content.Model.Entity.Article.prototype.getImage = function()
{
    return this.image;
};

/**
 *
 * @param {Planck.Extension.Content.Model.Entity.Image}image
 * @returns {Planck.Extension.Content.Model.Entity.Article}
 */
Planck.Extension.Content.Model.Entity.Article.prototype.setImage = function(image)
{

    this.setValue('image_id', image.getId());
    this.image = image;
    return this;
};




Planck.inherit(
    Planck.Extension.Content.Model.Entity.Article,
    Planck.Model.Entity
);
