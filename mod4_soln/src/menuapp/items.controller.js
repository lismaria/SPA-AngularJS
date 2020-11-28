(function(){
    'use strict';
    var app = angular.module('MenuApp');
    app.controller('itemsController'['$stateParams', 'MenuDataService', 'items',function([$stateParams, MenuDataService, items]){
        var itemCtrl = this;
        itemCtrl.items= items;
        itemCtrl.categoryName= $stateParams.categoryName;
    }]);
})();