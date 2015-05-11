angular.module('trainingApp.feature1')

	// si en dos modulos distintos que importe en mi aplicacion,
	// existienes dos servicios con el mismo nombre, habria una colision,
	// y el sistema reconoceria el ultimo que halla sido inyectado.
	// por tanto: FOLLOW A GOOD NAMESPACING CONVENTION. 
	// .factory('myService', function(){
	.factory('myService', function(){
		var text= "I'm the service of feature1";
		console.log("PASO POR MYSERVICE");
		return {
			getText: function(){
				return text;
			}
		};
	});