angular.module('trainingApp.feature2')
	// si a este controlador lo nombro igual que al controlador en
	// el modulo feature2, ¿habra colisiones?
	//	-->  Supongo que no, ya que ambos pertenecen a modulos distintos
	.controller('feature2', ['f2.myService',function(myService){
		var self= this;
		self.test='hola';
		self.animals=[
			{name: 'lion', active: true},
			{name: 'shark', active: true},
			{name: 'falcon', active: true},
			{name: 'ant', active: false},
		];

		console.log("service2: "+ myService.getText());
		self.myService= myService.getText();
	}]);