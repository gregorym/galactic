(function() {
  var app = this;
  app.collections = app.collections || {};
  
  app.collections.Repos = Backbone.Collection.extend({
    model: app.models.Repo,
    initialize: function(){
      this.url = ('https://api.github.com/users/' + app.current_user + '/watched');
    },
    
    sync: function(method, model, options) {
      options.dataType  = 'jsonp';
      options.url       = this.url;
      return Backbone.sync(method, model, options);
    },
    
    parse: function(resp, xhr) {
      return resp.data;
    },

    search: function (word) {
      _.select(this.models, function(repo) {
        return repo;
      });
    }
    
  });
}).apply(galactic);
