/* global ionic, define */
define([
  'app',
  'services/user',
  'services/auth'
], function(app) {
  'use strict';

  app.controller('UserCtrl', [
    '$scope',
    '$stateParams',
    '$state',
    '$ionicHistory',
    '$ionicPopup',
    '$localStorage',
    'userService',
    'authService',
    function($scope, $stateParams, $state, $ionicHistory, $ionicPopup, $localStorage, userService, authService) {
      var authUser = $localStorage.getObject("authUser", "{}");
      if (authUser.id != undefined) {
        $ionicHistory.nextViewOptions({
          historyRoot: true
        });
        $state.go('dashboard', {});
      }

      $scope.popAlert = function(msgTitle, msg) {

        $ionicPopup.alert({
          title: msgTitle,
          template: msg
        });

      };
      $scope.user = {};
      $scope.msgs = [];
      //console.log("userID: " + $localStorage.getObject("authUser", "{}").id);
      if (authUser.id != undefined) {
        userService.getUser(authUser.id).$promise.then(
          function(user) {
            $scope.user = user;
            console.log("usuario ok: " + user.name);
          },
          function(err) {
            console.log("usuario erro : " + JSON.stringify(err));
          }
        );
      }
      $scope.login = function() {
        //console.log(JSON.stringify($scope.user));
        userService.getUserByEmail($scope.user.email).$promise.then(
          function(user) {
            user = user[0];
            console.log("#### USUARIO::")
            console.log(user.email);
            if ($scope.user.email == user.email && $scope.user.password == user.password) {
              delete user.photo;
              authService.setUser(user);
              authService.login();
              $ionicHistory.nextViewOptions({
                historyRoot: true
              });
              $state.go('dashboard', {});
            } else {
              $scope.msgs.push({
                error: "Wrong email or password."
              })
              $scope.popAlert("error", "Wrong email or password.");
            }
          },
          function(err) {
            $scope.msgs.push({
              error: "Error processing request. Check internet connection."
            });
            $scope.popAlert("error", "Error processing request. Check internet connection.");
          }
        );

      };


    }
  ])
});
