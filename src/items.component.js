(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/templates/items.template.html',
  bindings: {
    itemList: '<',
    short_name: '<',
    name: '<'
  }
});


})();