import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // let promise = this.get("session").fetch();
    // promise.then(() => console.log('authenticated')).catch(() => console.log('not authenticated'));
    // return promise;
  }
});
