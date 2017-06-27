var app = angular.module('myApp', []);
//removed dependency on $http and added myCarServices
app.controller('MainCtrl', function($scope, myCarServices, $interval, $window, $log) {   
    $scope.message = "Cars.com";
    $scope.notSearched = true;
    $scope.error = false;
    $scope.countDown = 5;

    $scope.carSearch = function(givenCar){
        $log.info("Searched for "+givenCar);
        $scope.notSearched = false;
        //accessing myCarServices getCarDetails function which returns a promise object.
        myCarServices.getCarDetails(givenCar).then(setMyCar,setDefaultCar);
    }
    var setMyCar = function(data){
        $scope.error = false;
        //no need to use response.data as already myCarServices.getCarDetails is returning data
        $scope.myCar = data;
        $log.info($scope.givenCar + " obtained ");
    }
    var setDefaultCar = function(error){
        $scope.error = true;
        $scope.myCar = null;
        $log.error(error);
    }
    var getAllCars = function(){
        myCarServices.getAllCars()
        .then(function(data){
            //no need to use response.data as already myCarServices.getAllCars is returning data
            $scope.cars = data;
        })
    }
    var timer = function(){
        $scope.countDown --;
        if($scope.countDown <= 0){
            getAllCars();
        }
    }
    $interval(timer, 1000, $scope.countDown);
});

