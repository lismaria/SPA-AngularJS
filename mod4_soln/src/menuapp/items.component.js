(function(){
    'use strict';
    var app = angular.module('MenuApp');
    app.component("items",{
        templateUrl: '/src/menuapp/templates/items.component.template.html',
        bindings: {
            items: '<'
        }
    });  
})();