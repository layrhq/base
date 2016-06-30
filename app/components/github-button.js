import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
  popup: Ember.inject.service(),
  env: Ember.inject.service(),
  working: null,
  complete: null,
  id: null,
  token: null,
  linked: Ember.computed.or('complete', 'token'),
  actions: {
    link() {
      let config = this.get('env').config();
      let id = this.get('id');

      let url = `${ENV.github.loginUrl}?client_id=${ENV.github.clientId}&redirect_uri=${ENV.github.redirectUri}&scope=${encodeURI(ENV.github.scope)}`;
      this.set('working', true);
      this.get('popup').open(url).then((code) => {
        $.get(`${config.authServer}/authenticate_github`, { code, id }, () => {
          this.set('working', null);
          this.set('complete', true);
        }).fail((err) => {
          console.log('auth server err:', err);
        });
      }).catch((err) => {
        console.log('github auth error:', err);
        this.set('working', null);
      });
    }
  }
});
