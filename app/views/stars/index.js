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
      'click .filter-list .filter-item': 'sidebarFilterign'
    };

    self.sidebarFilterign = function(e){

    }

    function populateRepos() {
      $wrapper.html('');
     app.repos.each(function(repo){
        new app.views.stars.Repo().render(repo);
      });
    }

    function fetchRepos(){
      app.repos = new galactic.collections.Repos();
      var deferreds = [];
      for (var i = 1; i <= 7; i++) {
        deferreds.push(galactic.repos.fetch({add: true, data: {page: i}}));
      };

      $.when.apply($, deferreds).done(function() {
        app.repos.models.reverse();
        populateRepos();
      });
    }

    function initialize() {
      self.delegateEvents();
      fetchRepos();
    }

    initialize();
    return self;
  };
}).apply(galactic);
