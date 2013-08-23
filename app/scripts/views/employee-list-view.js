/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/employee-list-item-view'
], function ($, _, Backbone, JST, EmployeeListItemView) {
  'use strict';

  var EmployeeListView = Backbone.View.extend({
    template: JST['app/scripts/templates/employee-list.ejs'],

    tagName:'ul',

    className:'nav nav-list',

    initialize:function () {
      console.log("EmployeeListView:initialize");
      var self = this;
      this.model.on("reset", this.render, this);
      this.model.on("add", function (employee) {
        console.log("EmployeeListView:add");
        self.$el.append(new EmployeeListItemView({model:employee}).render().el);
      });
    },

    render:function () {
      console.log("EmployeeListView:render");
      this.$el.empty();
      _.each(this.model.models, function (employee) {
        this.$el.append(new EmployeeListItemView({model:employee}).render().el);
      }, this);
      return this;
    }
  });

  return EmployeeListView;
});