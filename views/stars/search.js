(function() {
  var app = this;
  app.views = app.views || {};
  app.views.stars = app.views.stars || {};
  app.views.stars.Search = function(options) {
    options = options || {};
    var base = {
      el: '#site-container .browser.stars-browser.columnsi .column.sidebar'
    };
    var self = new (Backbone.View.extend(base))(options);
    var $el = $(self.el);

    self.events = {
    };

    function initialize() {
      self.delegateEvents();
    }

    initialize();
    return self;
  };
}).apply(galactic);

