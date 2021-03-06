angular
	.module('taskApp', [
		'ngAnimate',
		'ngResource',
		'ngRoute',
		/* Material framework */
		'ngMaterial',
		'ngMdIcons',
		'ngAria',
		/* Authetication */
		'ng-token-auth',
		/* Time ago and more */
		'angularMoment'
		])
	.config(config)
	.config(theme)
	.factory('Task', Task)
	.factory('User', User)
	.factory('Sheet', Sheet)
	.factory('Toast', Toast)
	.controller('TasksController', TasksController)
	.controller('EditDialogController', EditDialogController)
	.controller('UsersController', UsersController);

//Config routes
function config($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'TasksController',
			templateUrl: 'assets/angular-app/templates/browse.html.erb'
		})		
		.when('/browse', {
			controller: 'TasksController',
			templateUrl: 'assets/angular-app/templates/browse.html.erb'
		})
		.otherwise({redirectTo: '/'
		});
}


//Custom theme
function theme($mdThemingProvider) {
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

};
