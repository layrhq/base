import Ember from 'ember';
import SidebarModuleComponent from './sidebar-module'

export default SidebarModuleComponent.extend({
  actions: {
    signOut: function() {
      this.get("session").close();
    }
  }
});
