define([
  'app',
  'services/rides'
], function (app) {
  'use strict';

  app.controller('RidesCtrl', [
    '$scope',
    '$state',
    '$stateParams',
    'ridesService',
    'userService',
    '$ionicLoading',
    '$localStorage',
    'baseURL',
    function ($scope, $state, $stateParams, ridesService, userService, $ionicLoading, $localStorage, baseURL) {
      console.log('entrou ride controller id:' + $stateParams.id);
      $scope.activeUser = $localStorage.getObject("authUser",{});
      $scope.sendingNewChatEntry = false;
      $scope.newEntry = {};
      $scope.ride = {};
      $scope.chatEntries = [];
      ridesService.getRide($stateParams.id).$promise.then(
          function(dados){
            $scope.ride = dados;
            console.log(dados.name);
          },
          function(err){
            console.log('erro: ' + JSON.stringify(err));
        }
      );
      $scope.refreshChat = function(){
          ridesService.getChat($stateParams.id).$promise.then(
              function(chatentries){
                $scope.chatEntries = chatentries;
              },
              function(err){
                console.log("Erro ao buscar chat: " + JSON.stringify(err));
              }
          )['finally'](function() {

          });
      };

      $scope.refreshChat();
      $scope.getAvatar = function(userId){
          userService.getUser(userId).$promise.then(
            function(userData){
              return userData.photo;
            },
            function(err){
                console.log(JSON.stringify(err));
            }
          );
      }
      $scope.goChat = function(){
        console.log("buscar chat:" + $scope.ride.id);
        $state.go('chat' , {id:$scope.ride.id});

      };

      $scope.addChatEntry = function(){
        $scope.sendingNewChatEntry = true;
        $ionicLoading.show({
            template: 'Sending...'
        });
        ridesService.addChatEntry($scope.newEntry.text, $scope.ride.id, $scope.activeUser.id).$promise.then(
            function(res){
                console.log("Result: " + JSON.stringify(res));
            },
            function(err){
                console.log("Error: " + JSON.stringify(err));
            }
        )['finally'](function() {
            $scope.sendingNewChatEntry = false;
            $ionicLoading.hide();
            $scope.refreshChat();
            $state.go($state.current, {}, {reload: true});

        });
      }

    }
  ]);
});
