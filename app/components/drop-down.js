import Ember from 'ember';

export default Ember.Component.extend({
  title: null,
  icon: null,
  open: false,
  actions: {
    toggle() {
      this.set('open', !this.get('open'));
    }
  }
});
