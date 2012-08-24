(function() {
  var app = this;
  app.collections = app.collections || {};
  
  app.collections.Repos = Backbone.Collection.extend({
    model: app.models.Repo,
    initialize: function(){
      this.url = ('https://api.github.com/users/' + app.current_user + '/watched');
    },

    search: function(word) {
      _.select(this.models, function(repo) {
        return repo;
      });
    }
    
  });
}).apply(galactic);
