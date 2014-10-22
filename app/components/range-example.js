import Ember from 'ember';

export default Ember.Component.extend({
  classNames : ['example col-md-6'],

  init: function () {
    this._super();

    if (!this.get('value')) {
      this.set('value', Math.floor((this.get('max') - this.get('min')) / 2));
    }
  }
});
