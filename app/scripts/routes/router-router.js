/*global define*/

define([
  'jquery',
  'backbone',
  'views/shell-view',
  'views/home-view',
  'views/contact-view'
], function ($, Backbone, ShellView, HomeView, ContactView) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      "":         "home",
      "home":     "home",
      "contact":  "contact"
    },

    initialize: function () {
      console.log('initialize');
      this.shellView = new ShellView();
      this.shellView.render();
      $('body').html(this.shellView.el);
      this.$content = $("#content");
    },

    home: function () {
      console.log('home');
      if (!this.homeView) {
        this.homeView = new HomeView();
      } else {
        console.log('reusing homeView');
      }
      this.homeView.render();
      this.shellView.selectMenuItem('home-menu');
    },

    contact: function () {
      console.log('contact');
      if (!this.contactView) {
        this.contactView = new ContactView();
      } else {
        console.log('reusing contactView');
      }
      this.contactView.render();
      this.shellView.selectMenuItem('contact-menu');
    },

  });

  return Router;
});