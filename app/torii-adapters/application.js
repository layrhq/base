import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  storage: Ember.inject.service(),
  google: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  fetch() {
    const google = this.get('google');
    let promise = new Ember.RSVP.Promise((resolve, reject) => {
      let token = this.get('storage.token');
      // let userData = Ember.Object.create({});

      if (Ember.isEmpty(token)) {
        this.get('routing').transitionTo('login');
        reject();
      } else {
        google.refreshToken(token)
          .then((data) => {
            // userData = data.userData;
          //   return google.fetchUser(data.access_token)
          // })
          // .then((data) => {
            resolve({ currentUser: data.userData });
          })
          .catch((err) => {
            this.set('storage.token', null);
            this.get('routing').transitionTo('login');
            reject(err);
          });
      }
    });
    return promise;
  },
  close() {
    this.set('storage.token', null);
    this.get('routing').transitionTo('login');
    return Ember.RSVP.resolve({ currentUser: null });
  }
});
