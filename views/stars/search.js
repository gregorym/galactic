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
    var search_field;

    self.events = {
    };


    function render() {
      search_field = $("<input type=text>").attr('placeholder', 'Find a Repository…').attr('class', 'filter_input').attr('id', 'search_field');
      $el.append(search_field);
    }

    function initialize() {
      self.delegateEvents();
    }

    initialize();
    return self;
  };
}).apply(galactic);

