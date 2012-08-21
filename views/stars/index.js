(function() {
  var app = this;
  app.views = app.views || {};
  app.views.stars = app.views.stars || {};
  app.views.stars.Index = function(options) {
    options = options || {};
    var base = {
      el: '#site-container .browser.stars-browser.columns'
    };
    var self = new (Backbone.View.extend(base))(options);
    var $el = $(self.el);
    var $wrapper = $el.find('.column.main');

    self.events = {
    };

    function populateRepos() {
      $wrapper.replaceWith('<div class="column main"></div>');
      for (var i = app.models.length - 1; i >= 0; i--) {
        console.log(app.models[i]);
      };

      //_.each(app.repos.models, function(repo){
        //$wrapper.append( app.templates['repoTemplate'](repo) );
      //});
    }

    function initialize() {
      self.delegateEvents();

      populateRepos();
    }

    initialize();
    return self;
  };
}).apply(galactic);
