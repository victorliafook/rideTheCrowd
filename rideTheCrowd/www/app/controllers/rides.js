define([
  'app',
  'services/rides'
], function (app) {
  'use strict';

  app.controller('RidesCtrl', [
    '$scope',
    '$state',
    'ridesService',
    '$ionicLoading',
    '$localStorage',
    'baseURL',
    function ($scope, $state, ridesService, $ionicLoading, $localStorage, baseURL) {
      console.log('entrou ride controller');
      $scope.activeUser = $localStorage.get("authUser",{});
      $scope.sendingNewChatEntry = false;
      $scope.newEntry = {};
      $scope.ride = {};

      ridesService.getRide(1).$promise.then(
          function(dados){
            $scope.ride = dados;
            console.log(dados.name);
          },
          function(err){
            console.log('erro: ' + JSON.stringify(err));
        }
      );

      $scope.chat = function(rideId){
        $scope.chatEntries = [];
         ridesService.getChat($scope.ride.id).$promise.then(
            function(chatentries){
              $scope.chatEntries = chatentries;
            },
            function(err){
              console.log("Erro ao buscar chat: " + JSON.stringify(err));
            }
        );
        $state.go('chat', {id:rideId});
      };

      $scope.addChatEntry = function(){
        $scope.sendingNewChatEntry = true;
        $ionicLoading.show({
            template: 'Sending...'
        });
        ridesService.addChatEntry($scope.newEntry.text, $scope.ride.id, $scope.activeUser).$promise.then(
            function(res){
                console.log("Result: " + JSON.stringify(res));
            },
            function(err){
                console.log("Error: " + JSON.stringify(err));
            }
        )['finally'](function() {
            $scope.sendingNewChatEntry = false;
            $ionicLoading.hide();

        });
      }

    }
  ]);
});
