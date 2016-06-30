import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service(),
  storage: Ember.inject.service(),
  google: Ember.inject.service(),
  routing: Ember.inject.service('-routing'),
  open(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.get('google').auth(data.authorizationCode)
        .then((data) => {
          this.set('storage.token', data.token);
          resolve({ currentUser: data.userData });
          this.get('routing').transitionTo('index');
        })
        .catch((err) => {
          reject(new Error(`${err.code}: ${err.message}`));
        });
    });
  }
});
