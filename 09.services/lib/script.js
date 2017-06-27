var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http, $interval, $window, $log) {   
    $scope.message = "Cars.com";
    $scope.notSearched = true;
    $scope.countDown = 5;
    $scope.error = false;

    $scope.carSearch = function(givenCar){
        $log.info("Searched for "+givenCar);
        $scope.notSearched = false;
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/"+givenCar.toLowerCase()+".json")
        .then(setMyCar,setDefaultCar);
    }
    var setMyCar = function(response){
        $scope.error = false;
        $scope.myCar = response.data;
        $log.info(givenCar + " obtained ");
    }
    var setDefaultCar = function(error){
        $scope.error = true;
        $scope.myCar = null;
        $log.error($scope.givenCar + " is not available ");
    }
    var getAllCars = function(){
        $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/all.json")
        .then(function(response){
            $scope.cars = response.data;
        })
    }
    var timer = function(){
        $scope.countDown --;
        if($scope.countDown <= 0){
            $window.alert("Will call getAllCars");
            getAllCars();
        }
    }
    $interval(timer, 1000, $scope.countDown);
});

