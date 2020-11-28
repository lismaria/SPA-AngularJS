(function(){
   'use strict' ;
    var app= angular.module('MenuApp');

    app.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
    
    app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home',{
                url: '/',
                templateUrl:'src/menuapp/templates/home.template.html'
            })

            .state('categories',{
                url: '/categories/{categoryShortName}',
                templateUrl: 'src/menuapp/templates/categories.template.html',
                controller: 'categoriesController as categCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
    }]);
})()