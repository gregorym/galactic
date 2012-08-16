(function() {
  var app = this;
  app.models = app.models || {};

  app.models.User = Backbone.Model.extend({
   // Instance methods   
 
  },
  {
    ?? Class methods
    getCurrentUser: function(){
      return $("#userbox #user a.name").text();
    }
  });
}).apply(galactic);

