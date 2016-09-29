define([
  'app',
  'services/localStorage'
], function (app) {
  'use strict';

  app.service('authService', [
    '$resource',
    '$localStorage',
    'baseURL',
    function ($resource, $localStorage, baseURL) {
      this.user = {};
      var authenticated = false;
      this.login = function(){
        console.log("Guardando user: " + this.user);
        $localStorage.storeObject("authUser", this.user);
      };
      this.getUser = function(){


        return this.user;
      };
      this.setUser = function(user){
        this.user = user;
      }
    }
  ])
});
