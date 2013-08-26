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
      "":               "home",
      "home":           "home",
      "contact":        "contact",
      "employees/:id":  "employeeDetails"
    },

    initialize: function () {
      console.log('AppRouter:initialize');
      this.shellView = new ShellView();
      $('body').html(this.shellView.render().el);
      $('body').click(function () {
        $('.dropdown').removeClass("open");
      });
      this.$content = $("#content");
    },

    home: function () {
      console.log('AppRouter:home');
      if (!this.homeView) {
        this.homeView = new HomeView();
      } else {
        console.log('reusing homeView');
      }
      this.homeView.render();
      this.shellView.selectMenuItem('home-menu');
      this.shellView.listenTo(this.homeView, 'showMe', this.shellView.search);
    },

    contact: function () {
      console.log('AppRouter:contact');
      if (!this.contactView) {
        this.contactView = new ContactView();
      } else {
        console.log('reusing contactView');
      }
      this.contactView.render();
      this.shellView.selectMenuItem('contact-menu');
    },

    employeeDetails: function (id) {
      var employee = new directory.Employee({id: id});
      var self = this;
      employee.fetch({
        success: function (data) {
          console.log(data);
          // Note that we could also 'recycle' the same instance of EmployeeFullView
          // instead of creating new instances
          self.$content.html(new directory.EmployeeView({model: data}).render().el);
        }
      });
      directory.shellView.selectMenuItem();
    }

  });

  return Router;
});