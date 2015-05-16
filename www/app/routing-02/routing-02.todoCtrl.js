angular.module('trainingApp.routing-02')
	.controller('TodoCtrl', ['todo', function(todo){
		//el 'todo' que se injecta es un resolve
		var self= this;

		self.todo= todo;

	}]);



	