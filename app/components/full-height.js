import Ember from 'ember';

export default Ember.Component.extend({
  constHeight: 0,
  updateHeight() {
    let windowHeight = this.$(window).height();
    let elHeight = this.$el.height();
    let offsetTop = this.$el.offset().top;
    let newHeight = windowHeight - this.get('constHeight') - offsetTop;
    this.$el.css({
      'min-height': newHeight
    });
  },
  didInsertElement() {
    this.$el = this.$('.full-height');
    this.$(window).on('resize', this.updateHeight.bind(this));
    this.updateHeight();
  },
  willDestroyElement() {
    this.$(window).off('resize', this.updateHeight.bind(this));
  }
});
