//1.we removed the declaration of app from here and moved it to app.js
//renamed it to MainCtrl.js
var app = angular.module('myApp');

//route params will give us anything that is sent via url
app.controller('CarCtrl', function($scope, myCarServices, $routeParams) {   

    $scope.notSearched = true;
    $scope.error = false;
    var givenCar = $routeParams.carname;
    
    var setMyCar = function(data){
        $scope.error = false;
        $scope.myCar = data;
    }
    var setDefaultCar = function(error){
        $scope.error = true;
        $scope.myCar = null;
    }
    var getAllCars = function(){
        myCarServices.getAllCars()
        .then(function(data){
            $scope.cars = data;
        })
    }
    
    myCarServices.getCarDetails(givenCar).then(setMyCar,setDefaultCar);
});

