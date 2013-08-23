/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var ContactView = Backbone.View.extend({
    template: JST['app/scripts/templates/contact.ejs'],

    el : '#inside',

    render:function () {
      this.$el.html(this.template());
      return this;
    }

  });

  return ContactView;
});