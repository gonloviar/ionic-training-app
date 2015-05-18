angular.module('trainingApp.modals')
	
	.controller('ModalsCtrl', ['$scope','$ionicModal',
		function($scope, $ionicModal){

			var self=this;
			self.contact = {
				name: 'Mittens Cat',
				info: 'Tap anywhere on the card to open the modal'
			};




			$ionicModal.fromTemplateUrl('app/modals/contact-modal.tpl.html', {
				scope: $scope,
				animation: 'slide-in-up'
			}).then(function(modal){
				self.myModal= modal;
			});

			self.openModal= function(){
				self.myModal.show();
			};

			self.closeModal= function(){
				console.log("ModalsCtrl::closeModal");
				self.myModal.hide();
			};

			// eliminar el modal del scope para evitar
			// memory leaks
			$scope.$on('$destroy', function(){
				console.log("ModalsCtrl::onDestroy");

				self.myModal.remove()
					.then(function(){
						console.log("Modal removido satisfactoriamente");
					});
			});

	}]);