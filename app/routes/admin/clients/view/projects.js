import Ember from 'ember';

export default Ember.Route.extend({
  model(data, transition) {
    return this.store.query('project', { client_id: transition.queryParams.client_id });
  }
});
