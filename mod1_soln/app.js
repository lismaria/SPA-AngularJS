(function(){
    'use strict';
    
    var app=angular.module("LunchCheck",[]);
    app.controller("LunchCheckController",["$scope",function($scope){
    //Just to let you know I have used the second method of injector(not the one sir prefers...)
        $scope.msg = "";
        $scope.dishes = "";
        $scope.arr = "";
        $scope.ch=false;
        $scope.red=false;
        $scope.checkLimit=function(){
            
            console.log($scope.dishes);
            $scope.arr = $scope.dishes.split(',');
            
            console.log($scope.arr);
            if ($scope.dishes.trim().length === 0){
                $scope.red=true;
                $scope.ch=false;
                $scope.msg="Please enter data first";                
            }else if($scope.arr.length<=3){
                $scope.msg="Enjoy!";
                $scope.ch=true;
                $scope.red=false;
            }else{
                $scope.msg = 'Too much!';
                $scope.ch=true;
                $scope.red=false;
            }                
        };
    }]);
})()

// $scope.dishes = '';
            // $scope.message = '';
            // $scope.checked = false;
    
            // $scope.checkLunch = function() {
            //     if ($scope.dishes.trim().length === 0) {
            //         $scope.empty = true;;
            //     } else {;
            //         $scope.checked = true;;
            //         $scope.empty = false;;
            //         var arrayDishes = $scope.dishes.split(',');
            //         var arrayDishesWithoutEmptys = arrayDishes.filter(function(v) {
            //             return v.trim() !== '';
            //         });
    
            //         if (arrayDishesWithoutEmptys.length <= 3) {
            //             $scope.message = 'Enjoy!';
            //         } else {
            //             $scope.message = 'Too much!';
            //         }
            //     }
            // };