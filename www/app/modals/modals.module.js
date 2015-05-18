angular.module('trainingApp.modals', [])

	.config(function($stateProvider, $urlRouterProvider ) {

		$stateProvider
			.state('modals', {
				url: '/modals',
				templateUrl:'app/modals/modals-example.html',
				controller: 'ModalsCtrl as vm'

			});
	});