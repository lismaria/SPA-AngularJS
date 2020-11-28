(function(){
    'use strict';
    var app = angular.module('MenuApp',[data,ui.router]);
    app.controller('categoriesController',['MenuDataService', 'categories', function(MenuDataService, categories){
        var categCtrl = this;
        categCtrl.categories = categories;
    }])

})()