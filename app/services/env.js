import Ember from 'ember';

export default Ember.Service.extend({
  config() {
    return this.container.lookupFactory('config:environment');
  }
});
