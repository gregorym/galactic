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
      return (
        this.get('full_name').toLowerCase().match(text) || 
        this.get('description').toLowerCase().match(text)
      )
    },

    isPublic: function(){
      return this.get('private') === false
    },

    isPrivate: function(){
      return this.get('private') === true
    }
  });
}).apply(galactic);

