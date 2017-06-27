var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope, $http) {
    $scope.message = "";
    $http.get("https://raw.githubusercontent.com/vnxyz/demo/master/swift.json")
        .then(function(response){
            $scope.myCar = response.data;
        })
});

