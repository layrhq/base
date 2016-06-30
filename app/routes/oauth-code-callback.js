import Ember from 'ember';

export default Ember.Route.extend({
  popup: Ember.inject.service(),
  beforeModel(transition) {
    this.get('popup').complete(transition.queryParams.code);
  }
});
