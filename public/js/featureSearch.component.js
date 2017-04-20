(function() {
  'use strict'

  angular.module('dndSheet')
    .component('featureSearch', {
      bindings: {
        post: '='
      },
      controller: controller,
      templateUrl: 'templates/featureSearch.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
