(function() {
  var app = this;
  app.collections = app.collections || {};

  app.collections.Repos = Backbone.Collection.extend({
    model: app.models.Repo,
    url: ('https://api.github.com/users/' + app.current_user + '/watched'),

    privateRepos: function() {
      return _.filter(models, function(repo){
        return (repo.private === true)
      });
    },

    publicRepos: function() {
      return _.filter(models, function(repo){
        return (repo.private === false)
      });
    }
  });
}).apply(galactic);