$(function() {
  // get user
  galactic.current_user = galactic.models.User.getCurrentUser();
  new galactic.views.stars.Index();
});