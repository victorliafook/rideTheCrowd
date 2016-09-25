define([
  'app'
], function (app) {
  'use strict';
  app.service('ridesService', [
    '$q',
    '$resource',
    'baseURL',
    function ($q, $resource, baseURL) {
        this.rides = [];
        this.getRides = function() {
            this.rides = $localStorage.getObject('rides', null) || $resource(baseURL + "/rides");
            return this.noticias;
        };
        this.getRide = function(rideId){
           return $resource(baseURL + "/rides/:id").query({id:rideId});
        };
    }
  ])
});
