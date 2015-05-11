angular.module('trainingApp.feature2')
	.factory('f2.myService', function(){
		var text= "I'm the service of feature2";
		console.log("PASO POR MYSERVICE");
		return {
			getText: function(){
				return text;
			}
		};
	});