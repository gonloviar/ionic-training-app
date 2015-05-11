angular.module('trainingApp.myIndexModule')
	.controller('MyIndexModuleCtrl', function(){

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
			}
		];

		self.test= "testeando";
		console.log("hola: " + self.test);
	});