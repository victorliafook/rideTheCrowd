/* global ionic, define */
define([
  'app',
  'services/rides'
], function (app) {
  'use strict';

  app.controller('DetailCtrl', [
    '$scope',
    '$stateParams',
    '$window',
    '$ionicPopup',
    'ridesService',
    function ($scope, $stateParams, $window, $ionicPopup, ridesService) {
      $scope.loading = true;
      ridesService.get($stateParams.id).then(function (ride) {
        $scope.ride = ride;
      }).finally(function () {
        $scope.loading = false;
      });

      $scope.reload = function () {
        ridesService.get($stateParams.id).then(function (ride) {
          $scope.ride = ride;
        }).finally(function () {
          $scope.$broadcast('scroll.refreshComplete');
        });
      };

      $scope.call = function () {
        $window.open('tel:' + $scope.ride.contact.tel, '_system');
      };

      $scope.mail = function () {
        $window.open('mailto:' + $scope.ride.contact.email, '_system');
      };

      $scope.website = function () {
        $window.open($scope.ride.website, '_system');
      };

      $scope.map = function () {
        if (ionic.Platform.isIOS()) {
          $window.open('maps://?q=' + $scope.ride.lat + ',' + $scope.ride.lng, '_system');
        } else {
          $window.open('geo://0,0?q=' + $scope.ride.lat + ',' + $scope.ride.lng + '(' + $scope.ride.name + '/' + $scope.ride.city + ')&z=15', '_system');
        }
      };

      $scope.report = function () {
        $ionicPopup.prompt({
          scope: $scope,
          title: '<span class="energized">Report an issue</span>',
          subTitle: '<span class="stable">What\'s wrong or missing?</span>',
          inputType: 'text',
          inputPlaceholder: ''
        }).then(function (res) {
          if (res) {
            // here connect to backend and send report
          }
        });
      };
    }
  ]);
});
