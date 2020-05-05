(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Category list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoryController as categories',
    resolve: {
      categoryList: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Category items list page
  .state('items', {
    url: '/{itemId}',
    templateUrl: 'src/templates/items.template.html',
    controller: 'ItemsController as items',
    resolve: {
      itemList: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams){
        return  MenuDataService.getItemsForCategory($stateParams.itemId)
      }]
    },
    params: {
      itemId: null,
      name: null
    }
  });
}

})();
