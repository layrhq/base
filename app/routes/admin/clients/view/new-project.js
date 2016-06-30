import Ember from 'ember';

export default Ember.Route.extend({
  model(data, transition) {
    return this.store.createRecord('project', {
      client: transition.resolvedModels['admin.clients.view']
    });
  },
  actions: {
    saveProject(project) {
      project.save().then((project) => this.transitionTo('admin.clients.view', project.client));
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
