import Ember from 'ember';

export default Ember.Route.extend({
  storage: Ember.inject.service(),
  redirect() {
    if (!Ember.isEmpty(this.get('storage.token'))) {
      this.transitionTo('index');
    }
  }
});
