/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var EmployeeListItemView = Backbone.View.extend({
    template: JST['app/scripts/templates/employee-list-item.ejs'],

    tagName: "li",

    initialize:function () {
      console.log("EmployeeListItemView:initialize");
      this.model.on("change", this.render, this);
      this.model.on("destroy", this.close, this);
    },

    render:function () {
      console.log("EmployeeListItemView:render");
      this.$el.html(this.template(this.model.attributes));
      return this;
    }

  });

  return EmployeeListItemView;
});