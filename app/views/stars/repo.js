(function() {
  var app = this;
  app.views = app.views || {};
  app.views.stars = app.views.stars || {};
  app.views.stars.Repo = function(options) {
    options = options || {};
    var base = {
      parent: '#site-container .browser.stars-browser.columns .column.main',
      initialize: function(){ 
        this.template = _.template("<span class='mega-icon <%= icon %>'></span><span class='js-toggler-container starring-container on'><a href='/<%= full_name %>/unstar' class='minibutton js-toggler-target starred' data-remote='true' data-method='post' rel='nofollow'><span class='mini-icon mini-icon-star'></span>Unstar</a><a href='/<%= full_name %>/star' class='minibutton js-toggler-target unstarred' data-remote='true' data-method='post' rel='nofollow'><span class='mini-icon mini-icon-star'></span>Star</a></span><h3><a href='/<%= full_name %>'><%= full_name %></a></h3><p class='description'><%= description %></p>");
      },
      render: function(repo) {
        this.model = repo;
        $(this.el).attr('id', 'repo-' + repo.get('id')).attr('class', 'starred-repo');
        $(this.el).html( this.template(this.model.toJSON()) );
        $(this.parent).prepend(this.el);
      }
    };
    var self = new (Backbone.View.extend(base))(options);
    var $el = $(self.el);
    self.events = {
      'repo:filter': 'filterRepo',
      'repo:show': 'showRepo'
    };

    self.filterRepo = function(e, text) {
      if (self.model.matches(text)) {
        $el.show();
      }else{
        $el.hide();
      }
    }

    self.showRepo = function(){
      $el.show();
    }

    function initialize(){
      self.delegateEvents();
    }

    initialize();
    return self;
  };
}).apply(galactic);
