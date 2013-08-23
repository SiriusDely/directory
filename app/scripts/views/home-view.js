/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
], function ($, _, Backbone, JST) {
  'use strict';

  var HomeView = Backbone.View.extend({
    template: JST['app/scripts/templates/home.ejs'],

    el : '#inside',

    events:{
      "click #showMeBtn":"showMeBtnClick"
    },

    render:function () {
      this.$el.html(this.template());
      return this;
    },

    showMeBtnClick:function (event) {
      console.log("showMeBtnClick");
      event.preventDefault();
    }

  });

  return HomeView;
});