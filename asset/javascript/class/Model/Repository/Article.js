Planck.Extension.Content.Model.Repository.Article = function ()
{

};





Planck.Extension.Content.Model.Repository.Article.prototype.services = {
    save: {
        url: '?/tool/route/call&route=/content/article/api[save]',
        method: 'post'
    },
    delete: Planck.Model.Repository.prototype.services.delete
};





Planck.inherit(
    Planck.Extension.Content.Model.Repository.Article,
    Planck.Model.Repository
);
