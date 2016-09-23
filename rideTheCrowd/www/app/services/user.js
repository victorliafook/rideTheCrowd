define([
  'app',
  'services/data'
], function (app) {
  'use strict';

  app.service('userService', [
    'dataService',
    function (dataService) {
      this.get = function () {


        return "";
      };
    }
  ]);
});
