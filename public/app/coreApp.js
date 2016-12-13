var coreApp = angular.module('coreApp', ['ngMaterial', 'ui.router']);

coreApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/')

	$stateProvider.state("index", {
		url : '/',
		templateUrl : '/app/views/index.html',
		controller : 'indexController'
	});

	$locationProvider.html5Mode(true);
}])