var galactic = window.galactic || {};
_(galactic).extend({
  $el: function() {
    return $('#wrapper');
  },
  history: window.history,
  location: window.location,
  current_user: null
});