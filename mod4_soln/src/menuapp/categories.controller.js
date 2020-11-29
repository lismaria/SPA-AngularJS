(function(){
    'use strict';
    var app = angular.module('MenuApp');
    //app.controller('categoriesController',['MenuDataService', 'categories', function(MenuDataService, categories){
    app.controller('categoriesController',['categories',function(categories){ 
        var categCtrl = this;
        categCtrl.categories = categories;
    }])

})();