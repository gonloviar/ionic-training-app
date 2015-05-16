angular.module('trainingApp.routing-02')
	.controller('TodosCtrl', ['TodosService', function(TodosService){
		var self= this;
		
		self.todos= TodosService.todos;

		console.log("soy TadosCtrl  yeee!!");

}]);