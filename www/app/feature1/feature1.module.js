angular
	.module('trainingApp.feature1', [])

		.config(function($stateProvider, $urlRouterProvider) {

			// $urlRouterProvider.otherwise('/');
			$stateProvider
			// crear una ruta abstracta para añadirle una seccion de ruta inicial
				.state('feature1', {
					abstract: true,
					url: '/feature1',
					template: '<ion-nav-view/>'
				})

				.state('feature1.example',{
					url:'/example',
					templateUrl:'app/feature1/feature1.tpl.html',
					controller:'feature as vm'

				});

			
		});