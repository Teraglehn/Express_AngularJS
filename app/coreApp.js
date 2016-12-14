require('../bower_components/angular/angular.min');
require('../bower_components/angular-ui-router/release/angular-ui-router.min');

require('../bower_components/angular-animate/angular-animate.min');
require('../bower_components/angular-aria/angular-aria.min');
require('../bower_components/angular-messages/angular-messages.min');

require('../bower_components/angular-material/angular-material.min');
require('../bower_components/angular-material/angular-material.min.css');

var coreApp = angular.module('coreApp', ['ngMaterial', 'ui.router']);

// States
coreApp.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state("index", {
      url: '/',
      templateUrl: '/views/index.html',
      controller: 'indexController'
    });

    $locationProvider.html5Mode(true);
  }
]);

// Directives

// Controllers
require('./controllers/indexController');