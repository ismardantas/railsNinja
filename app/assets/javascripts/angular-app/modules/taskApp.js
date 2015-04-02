var taskApp = angular.module('taskApp', [
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'ngMaterial',
	'ngMdIcons',
	'ngAria',
	'appServices',
	'appControllers'
	]);

taskApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			controller: 'TaskController',
			templateUrl: 'assets/angular-app/templates/browse.html.erb'
		})
		.when('/post', {
			controller: 'TaskController',
			templateUrl: 'assets/angular-app/templates/post.html.erb'
		})
		.when('/edit/:taskId', {
			controller: 'UpdateController',
			templateUrl: 'assets/angular-app/templates/edit.html.erb'
		})
		.when('/browse', {
			controller: 'TaskController',
			templateUrl: 'assets/angular-app/templates/browse.html.erb'
		})
		.otherwise({redirectTo: '/'
		});

}]);

taskApp.config(['$mdThemingProvider', function($mdThemingProvider) {
	var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
		'contrastDefaultColor': 'light',
		'contrastDarkColors': ['50'],
		'50': 'ffffff'
	});

	$mdThemingProvider.definePalette('customBlue', customBlueMap);
	$mdThemingProvider.theme('default')
	.primaryPalette('customBlue', {
			'default': '500',
			'hue-1': '50'
	})
	.accentPalette('pink');

	$mdThemingProvider.theme('input', 'default')
	.primaryPalette('grey')

}]);