define([
  'app',
  // Load Controllers here
  'controllers/app',
  'controllers/dashboard',
  'controllers/results',
  'controllers/detail',
  'controllers/user',
  'controllers/rides'
], function (app) {
  'use strict';
  // definition of routes
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      // url routes/states
      $urlRouterProvider.otherwise('login');

      $stateProvider
        // app states
        .state('login', {
          url: '/login',
          templateUrl: 'app/templates/login.html',
          controller: 'UserCtrl'
        })
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'app/templates/dashboard.html',
          controller: 'DashboardCtrl'
        })
        .state('results', {
          url: '/results/:search/:satTrans/:wheelChair/:wheelChairLift',
          controller: 'ResultsCtrl',
          templateUrl: 'app/templates/results.html'
        })
        .state('detail', {
          url: '/detail/:id',
          controller: 'RidesCtrl',
          templateUrl: 'app/templates/detail.html'
        })
        .state('chat', {
          url: '/detail/chat',
          controller: 'RidesCtrl',
          templateUrl: 'app/templates/ridechat.html'
        })
        .state('findusers', {
          url: '/findusers',
          controller: 'UserCtrl',
          templateUrl: 'app/templates/findusers.html'
        })
        .state('user', {
          url: '/user/:id',
          controller: 'UserCtrl',
          templateUrl: 'app/templates/user.html'
        })
        .state('messageboard', {
          url: '/user/messages/:id',
          controller: 'UserCtrl',
          templateUrl: 'app/templates/messageboard.html'
        });
    }
  ]);
});
