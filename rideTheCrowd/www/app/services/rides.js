define([
  'app',
  'services/localStorage'
], function (app) {
  'use strict';
  app.service('ridesService', [
    '$q',
    '$resource',
    '$timeout',
    '$localStorage',
    'baseURL',
    function ($q, $resource, $timeout, $localStorage, baseURL) {
        this.rides = [];
        this.getRides = function() {
            this.rides = $localStorage.getObject('rides', null) || $resource(baseURL + "/rides").query();

            return this.rides;

        };

        this.getRide = function(rideId){
           return $resource(baseURL + "/rides/:id").get({id:rideId});
        };

        this.getNext = function () {
          var deferred = $q.defer(),
              rides = [],
              i = 0;

          for (i; i < this.rides.length; i = i + 1) {
            if (i === 5) {
              break;
            }
            rides.push(this.rides[i]);
          }

          $timeout(function () {
            deferred.resolve(rides);
          }, 1000);

          return deferred.promise;
        };
    }
  ])
});
