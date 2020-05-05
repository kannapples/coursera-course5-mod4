(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;
  // list of categories
  var categoryList = []

  service.getAllCategories = function() {
    return $http({
      url: (ApiBasePath + "/categories.json")
    }).then(function(result) {
      categoryList = result.data;
      return categoryList;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log('sn: ',categoryShortName)
    return $http({
      url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
    }).then(function(result) {
      var itemList = result.data.menu_items;
      return itemList;
    });
  };
}

})();
