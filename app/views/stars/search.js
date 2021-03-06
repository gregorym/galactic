(function() {
  var app = this;
  app.views = app.views || {};
  app.views.stars = app.views.stars || {};
  app.views.stars.Search = function(options) {
    options = options || {};
    var base = {
      el: '#site-container .browser.stars-browser.columns .columns.sidebar',
      search_field_id: '#search_field',
      render: function(){
        var search_field = $("<input type=text>").attr('placeholder', 'Find a Repository…').attr('class', 'filter_input').attr('id', 'search_field');
        $el.prepend(search_field);
      }
    };
    var self = new (Backbone.View.extend(base))(options);
    var $el = $(self.el);
    
    self.events = {
      'keyup #search_field': 'onKeyUp'
    };

    self.onKeyUp = function (e){
      var text_field = $(e.currentTarget);
      
      if (text_field.val().length >= 3){
        $('div[id^="repo-"]').trigger('repo:filter', text_field.val());	
      }else{
        $('div[id^="repo-"]').trigger('repo:show:all');
      }
    }  

    function removePublicPrivateLinks(){
      $el.find('.filter-list li:not(:first-child)').fadeOut('fast');      
    }

    function initialize() {
      self.delegateEvents();
      removePublicPrivateLinks();
    }

    initialize();
    return self;
  };
}).apply(galactic);

