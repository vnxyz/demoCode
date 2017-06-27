var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {   
    $scope.message = "Welcome to Cars.com";
    var dummyCar = {
        modelName: "NA",
        companyName: "NA",
        fuelTypesAvl: "NA",
        imageUrl:"http://images.clipartpanda.com/car-clipart-Blue-car-clipart.jpg"
    };
    $scope.myCar = dummyCar;
    $scope.carSearch = function(givenCar){
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/"+givenCar.toLowerCase()+".json")
        .then(setMyCar,setDefaultCar);
    }
    var setMyCar = function(response){
        $scope.error = "";
        $scope.myCar = response.data;
    }
    var setDefaultCar = function(error){
        $scope.error = "Could not find car details";
        $scope.myCar = dummyCar;
    }
    var getAllCars = function(){
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/all.json")
        .then(function(response){
            $scope.cars = response.data;
        })
    }
    getAllCars();
});

