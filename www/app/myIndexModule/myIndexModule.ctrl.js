angular.module('trainingApp.myIndexModule')
	.controller('MyIndexModuleCtrl', ['f2.myService',
		function(myService){

		console.log("soy ctrl de MyIndexModule");

		var self= this;
		self.modules= [
			{
				url: "#/feature1/example",
				description: "Feature1"
			},
			{
				url: "#/feature2/example",
				description: "Feature2"
			},
			{
				url: "#/routing-01/help",
				description: "Routing - 01"
			},
			{
				url: "#/routing-02/help",
				description: "Routing - 02"
			}

		];

		self.test= "testeando";
		console.log("hola: " + self.test);
		self.myService= myService.getText();
	}]);