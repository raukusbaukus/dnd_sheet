(function() {
  'use strict'

  angular.module('dndSheet')
    .component('featureForm', {
      bindings: {
        post: '='
      },
      controller: controller,
      templateUrl: 'templates/featureForm.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
