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
      $wrappend.append('');
      _.each(app.repos, function(repo){
        $wrappend.prepend( app.templates['repoTemplate'](repo) );
      });
    }

    function initialize() {
      self.delegateEvents();

      app.repos = new app.collections.Repos().fetch();
      populateRepos();
    }

    initialize();
    return self;
  };
}).apply(galactic);
