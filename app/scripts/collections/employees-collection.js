/*global define*/

define([
  'underscore',
  'backbone',
  'models/employee-model'
], function (_, Backbone, EmployeeModel) {
  'use strict';

  var EmployeesCollection = Backbone.Collection.extend({
    model: EmployeeModel,
    url: "/employees"
  });

  return EmployeesCollection;
});