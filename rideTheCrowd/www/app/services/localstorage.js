define([
  'app'
], function (app) {
  'use strict';

  app.factory('$localStorage', ['$window', function($window) {
        return {
            store: function(key, value) {
                $window.localStorage['rideTheCrowd:' + key] = value;
            },
            get: function(key, defaultValue) {
                return $window.localStorage['rideTheCrowd:' + key] || defaultValue;
            },
            storeObject: function(key, value) {
                $window.localStorage['rideTheCrowd:' + key] = JSON.stringify(value);
            },
            getObject: function(key, defaultValue) {
                console.log("trying to get: " + key);
                return JSON.parse($window.localStorage['rideTheCrowd:' + key] || defaultValue);
            },
            remove: function(key) {
                $window.localStorage.removeItem('rideTheCrowd:' + key);
            }
        }
    }]);
});
