(function () {
'use strict';

angular.module('data')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams', 'itemList'];
function ItemsController($stateParams, itemList) {
  var items = this;
  items.short_name = $stateParams.itemId  
  items.name = $stateParams.name
  items.itemList = itemList;


}

})();