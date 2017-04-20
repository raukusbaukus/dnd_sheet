(function() {
  'use strict'

  angular.module('dndSheet')
    .component('spellSearch', {
      bindings: {
        character: '='
      },
      controller: controller,
      templateUrl: 'templates/spellSearch.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
