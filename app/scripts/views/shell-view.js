/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'collections/employees-collection',
  'views/employee-list-view'
], function ($, _, Backbone, JST, EmployeesCollection, EmployeeListView) {
  'use strict';

  var ShellView = Backbone.View.extend({
    template: JST['app/scripts/templates/shell.ejs'],

    // el : '#content',

    initialize: function () {
      console.log("ShellView:initialize");
      this.employeesCollection = new EmployeesCollection();
      // this.employeesCollection.fetch({reset: true, data: {name: "s"}});
      this.employeeListView = new EmployeeListView({model: this.employeesCollection, className: 'dropdown-menu'});
    },

    events: {
      "click .brand": "search",
      "keyup .search-query": "search",
      "keypress .search-query": "onkeypress"
    },

    render: function () {
      console.log("ShellView:render");
      this.$el.html(this.template());
      $('.navbar-search', this.el).append(this.employeeListView.render().el);
      return this;
    },

    search: function (event) {
      var key = $('#searchText').val();
      this.employeesCollection.fetch({reset: true, data: {name: key}});
      var self = this;
      setTimeout(function () {
        $('.dropdown').addClass('open');
      });
      console.log("ShellView:search " + key);
    },

    onkeypress: function (event) {
      console.log("ShellView:onkeypress");
      if (event.keyCode === 13) { // enter key pressed
        event.preventDefault();
      }
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