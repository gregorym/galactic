(function() {
  var app = this;
  app.views = app.views || {};
  app.views.stars = app.views.stars || {};
  app.views.stars.Index = function(options) {
    options = options || {};
    var base = {
      el: 'i#site-container .browser.stars-browser.columns'
    };
    var self = new (Backbone.View.extend(base))(options);
    var $el = $(self.el);
    var $wrapper = $el.find('.column.main');

    self.events = {
    };


    // Load all watched repositories
    // and render all of them in the page
    function allStarredRepositories(mode) {
      var last_page_number  = _.max( _.map($el.find(".pagination a"), function(a){ parseInt($(a).text()) }) );
      var url               = "https://api.github.com/users/" + app.current_user + "/watched?page";
      for (var i = 1; i = last_page_number; i++) {
        $.getJSON( (url+i, function(data){
          // Remove child of the wrapper, will be replaced by new list.
          if (i === 1) { $wrapper.append(''); }

          //Prepend repos
        }));
      };
    };

    function initialize() {
      self.delegateEvents();
    }

    initialize();
    return self;
  };
}).apply(galactic);
