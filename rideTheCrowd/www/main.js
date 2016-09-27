var require = {
  baseUrl: 'app',
  paths: {
    'ionic': '../lib/ionic/js/ionic.bundle.min',
    'ngCordova': '../lib/ng-cordova.min',
    'ngResource': '../lib/ionic/js/angular/angular-resource.min'
    // jquery: '../lib/jquery/jquery.min.js'
  },
  // if you are using jquery you have to add a shim for ionic and add jquery as deps
   shim: {
     'ngCordova': {deps: ['ionic']},
     'ngResource': {deps: ['ionic']}
   },
  // sometimes you need to set the loading priority especially
   priority: [
     'ionic',
     'ngResource',
     'ngCordova'
   ]
};
