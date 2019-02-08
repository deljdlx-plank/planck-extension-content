$(function() {

    Planck.Extension.Redactor.initialize(document.body);

    var controller = new Planck.Extension.Content.Module.Article.Controller.Edit();
    controller.initialize();

});