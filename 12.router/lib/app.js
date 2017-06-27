//IIFE
(function() {
  //added declaration of myApp here
  //mentioning that our app needs another module ngRoute to run
  //add angular-route.js for router
  var app = angular.module('myApp', ["ngRoute"]);
  //configuration functions for our application
  //angular will run this at the early stage of the lifecycle of this application
  //we define our routes here
  app.config(function($routeProvider) {
    $routeProvider
    //on seeing '/main' angular will fetch main.html in place of ng-view directive
    //and make MainCtrl incharge of the following template
      .when("/main", {
        templateUrl: "main.html",
        //optional
        controller: "MainCtrl"
      })
      // :carname will be treated as a parameter by CarCtrl
      .when("/car/:carname", {
        templateUrl: "car.html",
        controller: "CarCtrl"
      })
      .when("/allCars", {
        templateUrl: "allCars.html",
        controller: "AllCarCtrl"
      })
      //default route is main
      .otherwise({
        redirectTo: "/main"
      });
  })
})();