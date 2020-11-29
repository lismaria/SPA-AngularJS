(function(){
   'use strict' ;
    var app= angular.module('MenuApp');
    
    app.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
        
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');
        
        // *** Set up UI states ***
        $stateProvider
             // Home page
             .state('home', {
                url: '/',
                templateUrl:'src/menuapp/templates/home.template.html'
            })

            //Category Page
            .state('categories',{
                url: '/categories',
                templateUrl: 'src/menuapp/templates/categories.template.html',
                controller: 'categoriesController as categCtrl',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService){
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            //Category Menu
            .state('items',{
                // url: '/categories/{categoryShortName}',
                url: '/categories/{category}',
                templateUrl: 'src/menuapp/templates/items.template.html',
                controller: 'itemsController as itemCtrl',
                // params: {
                //     categoryShortName: null,
                //     categoryName: null
                // },
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        // return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });
    }]);
})();