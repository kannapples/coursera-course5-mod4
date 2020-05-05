(function () {
'use strict';

angular.module('data')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['categoryList'];
function CategoryController(categoryList) {
  var categories = this;
  
  categories.categoryList = categoryList;
}

})();