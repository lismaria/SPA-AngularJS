(function(){
    'use strict';
    var app = angular.module('MenuApp',[data,ui.router]);
    app.component("items",{
        templateUrl: '/src/menuapp/templates/items.component.template.html',
        bindings: {
            items: '<'
        }
    });  
})()