(function() {
  'use strict'

  angular.module('dndSheet')
    .component('featureSingle', {
      bindings: {
        post: '='
      },
      controller: controller,
      templateUrl: 'templates/featureSingle.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
