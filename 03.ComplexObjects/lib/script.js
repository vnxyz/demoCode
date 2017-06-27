var app = angular.module('myApp', []);
app.controller('MainCtrl', function($scope) {
    $scope.message = "";
    var myCar = {
        modelName: "Swift",
        companyName: "Maruti Suzuki",
        fuelTypesAvl: "Petrol and Diesel",
        imageUrl: "https://marutistoragenew.blob.core.windows.net/msilintiwebimages/swiftnew/img_color_sft_fire_red.png"
    };
    $scope.myCar = myCar;
});

