(function() {
  'use strict'

  angular.module('dndSheet')
    .component('skillForm', {
      bindings: {
        character: '='
      },
      controller: controller,
      templateUrl: 'templates/skillForm.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
