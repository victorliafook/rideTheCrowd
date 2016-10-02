define([
  'app'
], function (app) {
  'use strict';

  app.service('userService', [
    '$resource',
    'baseURL',
    function ($resource, baseURL) {

      this.get = function (id) {


        return id;
      };
      this.getUser = function(userId){
          return $resource(baseURL + "/users/:id").get({id: userId});
      };

      this.getUserByEmail = function(emailStr){
         return $resource(baseURL + "/users?email=:email").query({email:emailStr});
      }

    }
  ])
});
