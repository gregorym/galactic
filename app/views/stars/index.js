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
    var $wrapper = $el.find('.columns.main');

    self.events = {
      'click .filter-list .filter-item': 'sidebarFilterign'
    };

    self.sidebarFilterign = function(e){

    }

    function populateRepos() {
      console.log($wrapper);
      $wrapper.html('');
      app.repos.each(function(repo){
        new app.views.stars.Repo().render(repo);
      });
    }

    function fetchRepos(last_page){
      app.repos = new galactic.collections.Repos();

      var deferreds = [];
      for (var i = 1; i <= last_page; i++) {
        deferreds.push(galactic.repos.fetch({add: true, data: {page: i}}));
      };

      $.when.apply($, deferreds).done(function() {
        //app.repos.models.reverse();
        populateRepos();
        new app.views.stars.Search().render();
      });
    }

    function initialize() {
      self.delegateEvents();

      var last_page = _.max(_.map(galactic.$el.find('.pagination a'), function(a){
        return parseInt(a.href.match(/\d+/)[0], 10);
      }));

      fetchRepos(last_page);
    }

    initialize();
    return self;
  };
}).apply(galactic);
