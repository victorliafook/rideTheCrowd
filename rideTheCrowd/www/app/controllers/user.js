/* global ionic, define */
define([
  'app',
  'services/user',
  'services/auth'
], function (app) {
  'use strict';

  app.controller('UserCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$ionicHistory',
    '$localStorage',
    'userService',
    'authService',
    function ($scope, $stateParams, $state, $ionicHistory, $localStorage, userService, authService) {

        $scope.user = {};
        console.log("userID: " + $localStorage.getObject("authUser", "{}").id);
        userService.getUser($localStorage.getObject("authUser", "{}").id).$promise.then(
          function(user){
            $scope.user = user;
            console.log("usuario ok: " + user.name);
          },
          function(err){
            console.log("usuario erro : " + JSON.stringify(err));
          }
        );
        $scope.login = function(){
          console.log(JSON.stringify($scope.user));
          authService.setUser($scope.user);
          authService.login();
          $ionicHistory.nextViewOptions({ historyRoot: true });
          $state.go('dashboard', {});
        };

        
    }
  ])
});
