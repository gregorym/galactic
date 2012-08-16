var starboard = window.starboard || {};
_(starboard).extend({
  $el: function() {
    return $('#wrapper');
  },
  history: window.history,
  location: window.location},
  current_user = this.models.User.getCurrentUser();
);
