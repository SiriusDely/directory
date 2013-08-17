/*global define*/

define([
  'jquery',
  'backbone',
  'views/shell-view'
], function ($, Backbone, ShellView) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {

    },

    initialize: function () {
      var shellView = new ShellView();
      shellView.render();
    },

  });

  return Router;
});