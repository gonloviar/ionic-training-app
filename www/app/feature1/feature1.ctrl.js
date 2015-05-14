angular.module('trainingApp.feature1')
	// si a este controlador lo nombro igual que al controlador en
	// el modulo feature2, ¿habra colisiones?
	//	-->  Supongo que no, ya que ambos pertenecen a modulos distintos
	.controller('feature', ["f1.myService",function(myService){
		var self= this;
		self.colors=[
			{name: 'red', active: true},
			{name: 'blue', active: true},
			{name: 'gree', active: false},
			{name: 'black', active: true}
		];
		console.log("service1: "+ myService.getText());
		self.myService= myService.getText();
	}]);