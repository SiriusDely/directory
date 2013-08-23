/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var ShellView = Backbone.View.extend({
    template: JST['app/scripts/templates/shell.ejs'],

    el : '#content',

    render: function () {
      this.$el.html(this.template());
      return this;
    },

    selectMenuItem: function(menuItem) {
      $('.navbar .nav li').removeClass('active');
      if (menuItem) {
        $('.' + menuItem).addClass('active');
      }
    }

  });

  return ShellView;
});