/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'base-layr-ember',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com" },
    firebase: 'https://base-layr242.firebaseio.com/',
    github: {
      clientId: '470e501ca6d55fcbecc8',
      loginUrl: 'https://github.com/login/oauth/authorize',
      redirectUri: 'http://base.layrconsulting.com/oauth_code_callback',
      scope: 'user repo gist',
      api: 'https://api.github.com',
      org: 'layrhq'
    },
    authServer: 'http://localhost:3000',
    torii: {
      sessionServiceName: 'session',
      providers: {
        'google-oauth2': {
          apiKey: '325090524652-aebb5udlfc91gc8n5lcf74vbr93sf2is.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200/oauth2callback',
          scope: 'profile email',
          accessType: 'offline'
        }
      }
    },
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "https://s-usc1c-nss-110.firebaseio.com",
      'script-src':  "'self' https://s-usc1c-nss-110.firebaseio.com https://base-layr242.firebaseio.com",
      // 'font-src':    ["'self'"],
      'connect-src': "'self' http://localhost:3000 http://api.layrconsulting.com wss://s-usc1c-nss-110.firebaseio.com https://s-usc1c-nss-110.firebaseio.com https://api.github.com",
      'img-src':     "'self' https://avatars.githubusercontent.com https://lh3.googleusercontent.com https://lh4.googleusercontent.com https://lh5.googleusercontent.com https://lh6.googleusercontent.com https://firebasestorage.googleapis.com",
      'style-src':   "'self' 'unsafe-inline'",
      // 'media-src':   ["'self'"]
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii.providers['google-oauth2'].redirectUri = 'http://base.layrconsulting.com/oauth2callback';
    ENV.torii.providers['google-oauth2'].hd = 'layrconsulting.com';
    ENV.authServer = 'http://api.layrconsulting.com';
  }

  return ENV;
};
