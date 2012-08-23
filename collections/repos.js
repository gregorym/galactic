(function() {
  var app = this;
  app.collections = app.collections || {};
  var LAST_PAGE;
  var FETCHED_ARRAY = [];

  app.collections.Repos = Backbone.Collection.extend({
    model: app.models.Repo,
    initialize: function(last_page){
      LAST_page = last_page;
      this.url = ('https://api.github.com/users/' + app.current_user + '/watched');

      for (var i = 1; i <= LAST_PAGE; i++) {
        this.fetch({add: true, data: {page: i}, success: function(){ FETCHED_ARRAY.push(true) });  
      };
    },

    search: function (word) {
      _.select(this.models, function(repo) {
        return repo;
      });
    }
  });
}).apply(galactic);
