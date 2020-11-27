//Please Note that I have used the alternative method which sir mentioned 
//so my solution might not look the way sir did
//Thank You

(function(){
    'use strict';

    var app=angular.module("NarrowItDownApp",[]);//.controller('NarrowItDownController', NarrowItDownController);

    app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    app.controller("NarrowItDownController",['MenuSearchService',function(MenuSearchService){
        var narrowCtrl=this;
        narrowCtrl.shortName = '';

        narrowCtrl.matchedMenuItems = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

            promise.then(function(items) {
                if (items && items.length > 0) {
                    narrowCtrl.message = '';
                    narrowCtrl.found = items;
                } else {
                    narrowCtrl.message = 'Nothing found!';
                    narrowCtrl.found = [];
                }
            });
        };

        narrowCtrl.removeMenuItem = function(itemIndex) {
            narrowCtrl.found.splice(itemIndex, 1);
        }
    }]);


    app.service("MenuSearchService",['$http', 'ApiBasePath',function($http, ApiBasePath){
    //app.service("MenuSearchService",['$http',function($http){
        var service=this;

        service.getMatchedMenuItems=function(searchTerm){
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
                //url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            }).then(function (response) {                
                    // process result and only keep items that match
                    var foundItems=[];
                    for(var i=0; i<response.data['menu_items'].length; i++){
                        if (searchTerm.length > 0 && 
                            response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                                    
                                foundItems.push(response.data['menu_items'][i]);
                        }
                    }
                    // return processed items
                    return foundItems;
                });
         };         
    }]);

    app.directive("foundItems",function(){
        var ddo = {
            templateUrl: 'foundItems.html',
            restrict: 'E',
            scope: {
              foundItems: '<',
              onEmpty: '<',
              onRemove: '&'
            },
            controller: 'NarrowItDownController as narrowCtrl',
            // controller: NarrowItDownController,
            // controllerAs: 'narrowCtrl',
            bindToController: true
          };        
          return ddo;
    });


})()


