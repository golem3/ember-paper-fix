'use strict';

const isModuleUnificationProject = require('../module-unification').isModuleUnificationProject;

module.exports = {
  description: 'Installs ember-cli-sass',

  normalizeEntityName() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  fileMapTokens() {
    if (isModuleUnificationProject(this.project)) {
      return {
        __path__() {
          return 'src/ui';
        }
      };
    } else {
      return {
        __path__() {
          return 'app';
        }
      };
    }
  },

  afterInstall() {
    console.log("in ember-paper-fix, afterInstall from index.js"); //JAT
    console.warn("warn - in ember-paper-fix, afterInstall from index.js"); //JAT
    console.error("error - in ember-paper-fix, afterInstall from index.js"); //JAT
    return this.addAddonToProject('ember-cli-sass', '11.0.1'); //JAT see if it does anything
  }
};