(function(){
    'use strict';
    var app= angular.module("data",[]);
    
    app.service('MenuDataService'['$http', 'ApiBasePath', function($http, ApiBasePath){
        var service = this;

        service.getAllCategories=function(){
            return $hhtp({
                method: 'GET',
                url: (ApiBasePath + "/categories.json")
            })
                .then(function(response){
                    return response.data;
                });
        };

        service.getItemsForCategory=function(categoryShortName){
            return $http({
                method: 'GET',
                url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName)
            })
                .then(function(response){
                    return response.data.menu_items
                })
        }
    }]);
})()