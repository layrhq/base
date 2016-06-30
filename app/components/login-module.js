import Ember from 'ember';
import SidebarModuleComponent from './sidebar-module'

export default SidebarModuleComponent.extend({
  working: null,
  actions: {
    signIn: function(provider) {
      this.set('working', true);
      this.get('session').open('google-oauth2').then((data) => {
        this.set('working', null);
      }).catch(() => this.set('working', null));
    }
  }
});
