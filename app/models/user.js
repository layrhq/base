import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  title: DS.attr('string'),
  picture: DS.attr('string'),
  last_login: DS.attr('date'),
  refresh_token: DS.attr('string'),
  github_username: DS.attr('string'),
  github_token: DS.attr('string')
});
