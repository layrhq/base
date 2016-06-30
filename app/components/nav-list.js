import Ember from 'ember';

let id = 0;

export default Ember.Component.extend({
  id: null,
  matching: Ember.computed('id', 'bus.selected', function() { return this.get('id') === this.get('bus.selected') }),
  areModels: null,
  bus: null,
  root: null,
  init() {
    this.set('id', id++);
    this._super(...arguments);
    const currentPath = this.get('container').lookup('controller:application').currentPath;
    const root = this.get('root');
    const areModels = this.get('areModels');
    let path = `${root}.view`;
    let active = currentPath === path;
    let subActive;
    this.get('list').forEach((i) => {
      if (!areModels) {
        subActive = currentPath.indexOf(`${root}.${i.path}`) !== -1;
        active = active || subActive;
      }
    });
    if (active) {
      this.set('bus.selected', this.get('id'));
    }
  },
  actions: {
    toggle() {
      if (this.get('matching')) {
        this.set('bus.selected', null);
      } else {
        this.set('bus.selected', this.get('id'));
      }
    }
  }
});
