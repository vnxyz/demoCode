//Make sure that this file is loaded after script.js because it is consuming angular module "myApp" from it.
//IIFE --> Immediately Invoked Function Expression
//None of the variables declared in IIFE will be in global space
(function(){
    //Example of a service consuming service
    var myCarServices = function($http){

        var getCarDetails = function(givenCar){
            return $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/"+givenCar.toLowerCase()+".json")
                    .then(
                        function(response){
                            //any value returned by .then method is wrapped in a promise 
                            //promises to return data not only after http call is completed 
                            //but also after the function in then is executed
                            return response.data;
                        }
                    );
        }

        var getAllCars =  function(){
            return $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/all.json")
                    .then(
                        function(response){
                            return response.data;
                        }
                    );
        }
        //revealing module pattern
        return {
            getCarDetails: getCarDetails,
            getAllCars: getAllCars
        };
    }
    //taking reference to angular module we are working on
    var module = angular.module("myApp");
    //registering with angular
    module.factory("myCarServices", myCarServices);

}());