/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var EmployeeSummaryView = Backbone.View.extend({
    template: JST['app/scripts/templates/employee-summary.ejs'],

    initialize:function () {
      this.model.on("change", this.render, this);
    },

    render:function () {
      this.$el.html(this.template(this.model.attributes));
      return this;
    }
  });

  return EmployeeSummaryView;
});