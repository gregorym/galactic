var galactic = window.galactic || {};
_(galactic).extend({
  $el: $('#wrapper'),
  history: window.history,
  location: window.location,
  current_user: null,
  repos: null,
  repos_views: []
});