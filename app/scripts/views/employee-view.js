/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/employee-summary-view',
  'views/employee-list-view',
], function ($, _, Backbone, JST, EmployeeSummaryView, EmployeeListView) {
  'use strict';

  var EmployeeView = Backbone.View.extend({
    template: JST['app/scripts/templates/employee.ejs'],

    el : '#inside',

    render: function () {
      this.$el.html(this.template(this.model.attributes));
      $('#details', this.el).html(new EmployeeSummaryView({model:this.model}).render().el);
      /*
      this.model.reports.fetch({
        success:function (data) {
          if (data.length == 0)
            $('.no-reports').show();
        }
      });
      $('#reports', this.el).append(new EmployeeListView({model:this.model.reports}).render().el);
      */
      return this;
    }

  });

  return EmployeeView;
});