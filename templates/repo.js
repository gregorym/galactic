(function() {
  var app = this;
  app.templates = app.templates || {};

  app.templates['repoTemplate'] = Handlebars.compile("<div class='starred-repo'>
                                    <span class='mega-icon mega-icon-public-repo'></span>
                                    <span class='js-toggler-container starring-container on'>

                                      <a href='/{{full_name}}/unstar' class='minibutton js-toggler-target starred' data-remote='true' data-method='post' rel='nofollow'>
                                        <span class='mini-icon mini-icon-star'></span>
                                        Unstar
                                      </a>
                                      <a href='/{{full_name}}/star' class='minibutton js-toggler-target unstarred' data-remote='true' data-method='post' rel='nofollow'>
                                        <span class='mini-icon mini-icon-star'></span>
                                        Star
                                      </a>
                                    </span>

                                    <h3><a href='/{{full_name}}'>{{full_name}}</a></h3>
                                      <p class='description'>{{description}}</p>
                                  </div>");
}).apply(starboard);