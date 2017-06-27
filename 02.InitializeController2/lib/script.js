// declaring angular module with name myApp here
//[] takes in array of dependencies the following module has
var app = angular.module('myApp', []);

//Registering a function as a controller
//This controller is given name MainCtrl
//Pass parameter $scope as input to controller function
app.controller('MainCtrl', function($scope) {
    
    //Anything added to this $scope will go into model, which will be available for view to access
    $scope.message = "Hello Angular!!";

});

