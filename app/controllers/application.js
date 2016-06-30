import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  bus: new Ember.Object({
    selected: null
  }),
  adminList: [{ name: 'Clients', path: 'clients' }, { name: 'Users', path: 'users' }]
});
