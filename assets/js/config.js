angular.module('registrationApp').config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/'); //landing on home page
	var path = 'temp/';
	var home = {
		name: 		  'home',
		url: 		  '/',
		templateUrl:  path+'home.html',
		controller:   'homeController',
		controllerAs: 'vm',
		data: {
			pageTitle: 'Home'
		}
	}
	var login = {
		name:  		  'login',
		url:   		  '/login',
		templateUrl:  path+'login.html',
		controller:  'loginController',
		controllerAs: 'vm',
		data: {
			pageTitle: 'Login'
		}
	}
	var register = {
		name:  		  'register',
		url:   		  '/register',
		templateUrl:  path+'registration.html',
		controller:  'registerController',
		controllerAs: 'vm',
		data: {
			pageTitle: 'Registration'
		}
	}
	// setting all states
	$stateProvider.state(home);
	$stateProvider.state(login);
	$stateProvider.state(register);
});