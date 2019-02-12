Planck.Extension.Content.Model.Repository.Article = function ()
{

};





Planck.Extension.Content.Model.Repository.Article.prototype.services = {
    save: {
        url: '?/tool/route/call&route=/content/article[save]',
        method: 'post'
    },
    delete: {
        url: '?/tool/route/call&route=/entity-editor/entity[delete]',
        method: 'delete'
    }
};





Planck.inherit(
    Planck.Extension.Content.Model.Repository.Article,
    Planck.Model.Repository
);
