/*global define*/

define([
  'jquery',
  'backbone',
  'views/shell-view',
  'views/contact-view'
], function ($, Backbone, ShellView, ContactView) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      "contact": "contact"
    },

    initialize: function () {
      console.log('initialize');
      var shellView = new ShellView();
      shellView.render();
      $('body').html(shellView.el);
      this.$content = $("#content");
    },

    contact: function () {
      console.log('contact');
      if (!this.contactView) {
        this.contactView = new ContactView();
      }
      this.contactView.render();
      this.$content.html(this.contactView.el);
    },

  });

  return Router;
});