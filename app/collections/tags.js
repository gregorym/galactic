(function() {
  var app = this;
  app.collections = app.collections || {};
  
  app.collections.Tags = Backbone.Collection.extend({
    model: app.models.Tag,
    localStorage: new Backbone.LocalStorage("galactic_tags")    
  });
}).apply(galactic);
