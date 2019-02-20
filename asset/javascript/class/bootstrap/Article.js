$(function() {

    if(document.location.toString().match(/\/content\/article\/edit/)) {
        Planck.Extension.FormComponent.initialize(document.body);
        var controller = new Planck.Extension.Content.Module.Article.Controller.Edit();
        controller.initialize();
    }

    if(document.location.toString().match(/\/articles/)) {
        //Planck.Extension.FormComponent.initialize(document.body);
        var controller = new Planck.Extension.Content.Module.Article.Controller.Listing();
        controller.initialize();
    }


});