//1.we removed the declaration of app from here and moved it to app.js
//renamed it to MainCtrl.js
var app = angular.module('myApp');

app.controller('MainCtrl', function($scope, $location) {   
    $scope.message = "Cars.com";
    $scope.carSearch = function(givenCar){
      $location.path("/car/"+givenCar);
    }
});

