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
      this.shellView = new ShellView();
      this.shellView.render();
      $('body').html(this.shellView.el);
      this.$content = $("#content");
    },

    contact: function () {
      console.log('contact');
      if (!this.contactView) {
        this.contactView = new ContactView();
      }
      this.contactView.render();
      console.log(this.shellView);
      console.log(typeof this.shellView);
      this.shellView.selectMenuItem('contact-menu');
    },

  });

  return Router;
});