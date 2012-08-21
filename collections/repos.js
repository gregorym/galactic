(function() {
  var app = this;
  app.collections = app.collections || {};

  app.collections.Repos = Backbone.Collection.extend({
    model: app.models.Repo,
    initialize: function(max_page){
      this.url = ('https://api.github.com/users/' + app.current_user + '/watched');

      for (var i = 1; i <= max_page; i++) {
        this.fetch({add: true, data: {page: i}})  
      };
    },

    search: function (word) {
      _.select(this.models, function(repo) {
        return repo;
      });
    }
  });
}).apply(galactic);
