import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    toggleMobile() {
      let body = Ember.$('body');
      let cls = 'sidebar-main-open';

      if (body.hasClass(cls)) {
        body.removeClass(cls);
      } else {
        body.addClass(cls);
      }
    }
  }
});
