import Ember from 'ember';
import TransitionMixin from 'ember-css-transitions/mixins/transition-mixin';
/* global Hammer */

export default Ember.Component.extend(TransitionMixin, {
  init() {
    this._super();
    this.get('fixed');
  },

  fixed: true,

  tagName: 'md-backdrop',
  classNames: ['md-default-theme'],
  classNameBindings: ['opaque:md-opaque', 'isLockedOpen:md-locked-open'],

  // TransitionMixin:
  transitionClass: 'ng',
  shouldTransition: Ember.computed.bool('opaque'),
  addDestroyedElementClone(parent, index, clone) {
    parent.append(clone);
  },

  updatePosition: Ember.observer('fixed', function() {
    let fixed = this.get('fixed');
    this.$().css('position', fixed ? 'fixed' : 'absolute');
  }),

  didInsertElement() {
    let backdropHammer = new Hammer(this.element);
    backdropHammer.on('tap', Ember.run.bind(this, this._onTap));
    this._backdropHammer = backdropHammer;

    if (this.get('fixed')) {
      this.$().css('position', 'fixed');
    }
  },

  willDestroyElement() {
    this._super(...arguments);
    if (this._backdropHammer) {
      this._backdropHammer.destroy();
    }
  },

  _onTap(e) {
    e.preventDefault();
    if (this.get('onTap')) {
      this.get('onTap')(e);
    }
  }

});
