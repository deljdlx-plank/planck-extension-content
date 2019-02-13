Planck.Extension.Content.Model.Repository.Article = function ()
{

};





Planck.Extension.Content.Model.Repository.Article.prototype.services = {
    save: {
        url: '?/tool/route/call&route=/content/article/api[save]',
        method: 'post'
    },
    delete: {
        url: '?/tool/route/call&route=/entity-editor/entity/api[delete]',
        method: 'delete'
    }
};





Planck.inherit(
    Planck.Extension.Content.Model.Repository.Article,
    Planck.Model.Repository
);
