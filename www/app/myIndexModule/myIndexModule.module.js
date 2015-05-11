//Este modulo es donde estara la lista que enlaza a los demas modulos.

angular.module('trainingApp.myIndexModule', [])

	.config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('myIndexModule',{
				url:'/myIndexModule',
				templateUrl: 'app/myIndexModule/myIndexModule.tpl.html',
				controller: 'MyIndexModuleCtrl as vm'
				// controllerAs: 'vm'
			});
	});