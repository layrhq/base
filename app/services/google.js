import Ember from 'ember';

export default Ember.Service.extend({
  validateToken(access_token) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      $.get('https://www.googleapis.com/oauth2/v1/userinfo', {
        alt: 'json',
        access_token
      }, (data) => {
        resolve(true);
      }).fail((err) => {
        resolve(false);
      });
    });
  },
  refreshToken(refresh_token) {
    let config = this.container.lookupFactory('config:environment');
    return new Ember.RSVP.Promise((resolve, reject) => {
      $.post(`${config.authServer}/refresh_user_token`, {
        token: refresh_token
      }, (data) => {
        resolve(data);
      }).fail((err) => {
        reject();
      });
    });
  },
  auth(code) {
    let config = this.container.lookupFactory('config:environment');
    var firebase = new Firebase(config.firebase);
    return new Ember.RSVP.Promise((resolve, reject) => {
      $.post(`${config.authServer}/authenticate_user`, { code }, (result) => {
        let token = result.token;
        firebase.authWithCustomToken(result.firebaseToken, (err, authData) => {
          if (!err) {
            result.firebase = authData;
            resolve(result);
          } else {
            reject(err);
          }
        });
      }).fail((err) => {
        reject(err);
      });
    });
  }
});
