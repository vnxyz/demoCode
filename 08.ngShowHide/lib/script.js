var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {   
    $scope.message = "Welcome to Cars.com";
    $scope.notSearched = true;
    $scope.error = false;
    
    $scope.carSearch = function(givenCar){
        $scope.notSearched = false;
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/"+givenCar.toLowerCase()+".json")
        .then(setMyCar,setDefaultCar);
    }
    var setMyCar = function(response){
        $scope.error = false;
        $scope.myCar = response.data;
    }
    var setDefaultCar = function(error){
        $scope.error = true;
        $scope.myCar = null;
    }
    var getAllCars = function(){
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/all.json")
        .then(function(response){
            $scope.cars = response.data;
        })
    }
    getAllCars();
});

