// The main app definition
// --> where you should load other module depdendencies
define([
  'ionic','ngCordova','ngResource'
], function () {
  'use strict';

  // the app with its used plugins
  var app = angular.module('app', [
    'ionic','ngCordova','ngResource'
  ])
  //  .constant("baseURL", "http://api.ridethecrowd.com.br/");
  .constant("baseURL", "http://localhost:1337");
  // return the app so you can require it in other components
  return app;
});
