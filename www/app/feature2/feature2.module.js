angular
	.module('trainingApp.feature2', [])

		.config(function($stateProvider, $urlRouterProvider) {

			// $urlRouterProvider.otherwise('/');
			$stateProvider
			// crear una ruta abstracta para añadirle una seccion de ruta inicial
				.state('feature2', {
					abstract: true,
					url: '/feature2',
					template: '<ion-nav-view/>'
				})

				.state('feature2.example',{
					url:'/example',
					templateUrl:'app/feature2/feature2.tpl.html',
					// controller:'Feature2Ctrl as vm'
					// controllerAs:'feature as vm'
					controller: 'feature2',
					controllerAs: 'vm'

				});

			
		});