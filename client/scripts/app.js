var myApp = angular.module('myApp',['ngAnimate']);



myApp.controller('myCtrl',["$scope", function($scope){
        $scope.bacon=['BLT Sandwich','Wrapped around Chicken/Turkey Breast','By the Plateful','Chocolate covered Bacon' ,'Maple Bacon Cupcakes','Double Bacon Butter-Burger','Bacon Stuffed Peppers' ,'Barbecue-baked Beans with Bacon','Bacon and Eggs','Bacon, Egg and Cheese Biscuits','Bacon and Waffles','Corn and Bacon Chowder ','Barbecue Chicken Pizza with Onions and BACON!'];
        }
    ]);
//    $scope.heading = "Message: ";
//
//    $scope.updateMessage = function(){
//        $scope.message = "Hello " + $scope.name + "!";
//    };
//
//    $scope.goodByeMessage = function(){
//        $scope.message = "Goodbye, " + $scope.name + "!";
//    };
//
