define([
  'app',
  'services/event'
], function (app) {
  'use strict';

  app.controller('DashboardCtrl', [
    '$scope',
    '$state',
    '$localStorage',
    'eventService',
    'ridesService',
    'baseURL',
    function ($scope, $state, $localStorage, eventService, ridesService, baseURL) {
      var authUser = $localStorage.getObject("authUser", "{}");
      if(authUser.id == undefined)
        $state.go('login', {});
      $scope.search = {};
      $scope.goToList = function () {
        $state.go('results', {
          search: $scope.search.string/*,
          satTrans: $scope.search.satTrans,
          wheelChair: $scope.search.wheelChair,
          wheelChairLift: $scope.search.wheelChairLift*/
        });
      };
      ridesService.getRides().$promise.then(
          function(rides){
            $scope.loadNext = function () {
              ridesService.getNext().then(function (events) {
                $scope.events = events;
              }).finally(function () {
                $scope.$broadcast('scroll.infiniteScrollComplete');
              });
            };
          },
          function(err){
            console.log("Erro ao buscar rides");
          }
      );

    }
  ]);
});
