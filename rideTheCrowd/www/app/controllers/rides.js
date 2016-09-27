define([
  'app',
  'services/rides'
], function (app) {
  'use strict';

  app.controller('RidesCtrl', [
    '$scope',
    '$state',
    'ridesService',
    'baseURL',
    function ($scope, $state, ridesService, baseURL) {
      console.log('entrou ride controller');
      $scope.ride = ridesService.getRide(1).$promise.then(
          function(dados){
            console.log(dados.name);
          },
          function(err){
            console.log('erro: ' + JSON.stringify(err));
          });

    }
  ]);
});
