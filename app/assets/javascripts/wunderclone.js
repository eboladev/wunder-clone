window.Wunderclone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    //create store collection for lists
    Wunderclone.Collections.lists = new Wunderclone.Collections.Lists();
    Wunderclone.Collections.lists.fetch({
      success: function () {
        new Wunderclone.Routers.Lists({
          $rootEl: $('#content'),
          lists: Wunderclone.Collections.lists
        });
        Backbone.history.start();
        
        var indexView = new Wunderclone.Views.ListsIndex({
          collection: Wunderclone.Collections.lists
        });
  
        $('#lists-index').html(indexView.render().$el);
      },
    });
  }
};

$(document).ready(function(){
  Wunderclone.initialize();
});
