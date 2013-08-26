/*global define*/

define([
  'underscore',
  'backbone',
], function (_, Backbone) {
  'use strict';

  var EmployeeModel = Backbone.Model.extend({
    urlRoot: "/employees",

    defaults: {
    },

    initialize:function () {
      // this.reports = new directory.EmployeeCollection();
      // this.reports.url = this.urlRoot + "/" + this.id + "/reports";
    }

  });

  return EmployeeModel;
});