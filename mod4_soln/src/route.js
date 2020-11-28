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

            .state('items',{
                url: '/categories/{categoryShortName}',
                templateUrl: 'src/menuapp/templates/items.template.html',
                controller: 'itemsController as itemCtrl',
                params: {
                    categoryShortName: null,
                    categoryName: null
                },
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                    }]
                }
            })
    }]);
})()