(function(){
    'use strict';
    var app= angular.module('MenuApp');

    app.component('categories',{
        templateUrl: 'src/menuapp/templates/categories.component.template.html',
        bindings: {
            categories: '<'
        }
    });
})();