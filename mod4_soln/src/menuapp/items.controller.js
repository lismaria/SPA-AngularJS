(function(){
    'use strict';
    var app = angular.module('MenuApp',[data,ui.router]);
    app.controller('itemsController'['$stateParams', 'MenuDataService', 'items',function([$stateParams, MenuDataService, items]){
        var itemCtrl = this;
        itemCtrl.items= items;
        itemCtrl.categoryName= $stateParams.categoryName;
    }]);
})()