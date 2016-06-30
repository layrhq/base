import Ember from 'ember';
import LocalStorage from 'base-layr-ember/utils/local-storage';

const { Service, computed } = Ember;

const STORAGE_ITEM = 'session';

function attr() {
  return computed({
    get(key) {
      return new LocalStorage(STORAGE_ITEM).data[key];
    },

    set(key, value) {
      let session = new LocalStorage(STORAGE_ITEM);

      session.data[key] = value;
      session.store();

      return value;
    }
  });
}

export default Service.extend({
  token: attr(),
  timeFormat: attr(),
  userFilter: attr()
});
