import Ember from 'ember';

export default Ember.Component.extend({
  list: null,
  rows: null,
  block: null,
  didReceiveAttrs() {
    const list = this.get('list');
    const rows = this.get('rows');
    let block = [];
    if (list.length > 0 || list.get('length') > 0) {
      list.forEach((el, i) => {
        if (i % rows === 0) {
          block.push([el]);
        } else {
          block[block.length-1].push(el);
        }
      });
      this.set('block', block);
    }
  }
});
