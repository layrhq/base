import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('client');
  },
  actions: {
    saveClient(client) {
      client.save().then((client) => this.transitionTo('admin.clients.view', client));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
