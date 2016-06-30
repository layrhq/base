import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  env: Ember.inject.service(),
  model() {
    let config = this.get('env').config();

    let username = this.get('session.currentUser.github_username');
    let access_token = this.get('session.currentUser.github_token');
    if (username && access_token) {
      return new Ember.RSVP.Promise((resolve, reject) => {
        $.get(`${config.github.api}/users/${username}/events/orgs/${config.github.org}`, { access_token }, resolve).fail((err) => resolve(null));
      });
    } else {
      return Ember.RSVP.resolve(null);
    }
  }
});
