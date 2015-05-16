// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('trainingApp.routing-02', [])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// })

.config(function($stateProvider, $urlRouterProvider){

  // ver si este otherwise() sobreescribe al otherwise() principal. 
  // Si en efecto lo sobreescribe, fijarme si lo hace para la aplicacion completa
  // o solo para esta seccion

  // $urlRouterProvider.otherwise('/routing-01/home');

  $stateProvider

    .state('routing-02',{
      abstract:true,
      url: '/routing-02',
      templateUrl: 'app/routing-02/templates/index-tabs.tpl.html'
    })

    .state('routing-02.todos',{
      // url: ''  --> si lo usara de esta manera , la url seria la que
      //              indica el estado abstracto 
      abstract: true,
      url: '/todos',
      views: {
        //todos is a NAMED VIEW, as well as help.
        todos: {
          template: '<ion-nav-view></ion-nav-view>'
        }
      }
    })
        .state('routing-02.todos.index', {
          url: '',
          templateUrl: 'app/routing-02/templates/todos.html',
          controller: 'TodosCtrl as vm'
        })
        .state('routing-02.todos.detail', {
          // Url parameter
          url: '/:todo',
          templateUrl: 'app/routing-02/templates/todo.html',
          controller: 'TodoCtrl as vm',
          resolve: {
            todo: function($stateParams, TodosService){
              return TodosService.getTodo($stateParams.todo);
            }
          }
        })
    
    .state('routing-02.help',{
      url: '/help',
      views: {
        help: {
          templateUrl: 'app/routing-02/templates/help.html'
        }
      }
    });



});
