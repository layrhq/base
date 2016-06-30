import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile');
  this.route('github');
  this.route('wercker');
  this.route('clients', function() {
    this.route('view', { path: '/:client_id' });
  });
  this.route('projects');
  this.route('pivotal');
  this.route('admin', function() {
    this.route('clients', function() {
      this.route('new');
      this.route('view', { path: '/:client_id' }, function() {
        this.route('projects');
        this.route('billing');
        this.route('history');
        this.route('new-project');
        this.route('settings');
      });
    });
    this.route('users', function() {
      this.route('edit', { path: '/:user_id/edit' });
      this.route('delete', { path: '/:user_id/delete' });
    });
  });
  this.route('oauth_code_callback');
  this.route('login');
});

export default Router;
