define([
  'app',
  'services/user'
], function (app) {
  'use strict';

  app.service('userService', [
    '$resource',
    function (dataService) {
      this.get = function () {


        return "";
      };
    }
  ]);
});
