import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('client', { isNew: false });
  },
  beforeModel: function(transition) {
    if (transition.targetName !== 'login') {
      let promise = this.get("session").fetch();
      promise.then(() => {}).catch(() => {});
      return promise;
    }
  }
});
