import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';
import Ember from 'ember';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}
console.log('Ember Paper Fix - Ember version = ', Ember.VERSION);
loadInitializers(App, config.modulePrefix);
