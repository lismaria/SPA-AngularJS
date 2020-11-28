(function(){
    'use strict';
    var app= angular.module('MenuApp');

    app.component('categories',{
        templateUrl: 'src/menuapp/categories.component.js',
        bindings: {
            categories: '<'
        }
    })
})()