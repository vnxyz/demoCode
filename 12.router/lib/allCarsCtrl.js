//1.we removed the declaration of app from here and moved it to app.js
//renamed it to MainCtrl.js
var app = angular.module('myApp');

//route params will give us anything that is sent via url
app.controller('AllCarCtrl', function($scope, myCarServices) {   
    var getAllCars = function(){
        myCarServices.getAllCars()
        .then(function(data){
            $scope.cars = data;
        })
    }
    
    getAllCars();
});

