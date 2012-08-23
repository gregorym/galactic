(function() {
  var app = this;
  app.models = app.models || {};

  app.models.Repo = Backbone.Model.extend({
    defaults: {
      icon: 'mega-icon-public-repo'
    },

    initialize: function(){
      if (this.get('fork') === true){
        this.set('icon', 'mega-icon-repo-forked');
      }else{
        this.set('icon', 'mega-icon-public-repo');
      }
    },

    matches: function(text){
      return (get('full_name').match(text) || get('description').match(text))
    }
  });
}).apply(galactic);

