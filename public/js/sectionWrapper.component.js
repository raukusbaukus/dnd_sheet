(function() {
  'use strict'

  angular.module('dndSheet')
    .component('sectionWrapper', {
      bindings: {
        character: '='
      },
      controller: controller,
      templateUrl: 'templates/sectionWrapper.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this
    //const vm.character = 0
    const playerId = 1
    $http.get(`/all/${playerId}`).then(character => {
      vm.character = character.data //how to get this on global scope?
    })

    vm.$onInit = function $onInit() {

    }

    vm.navigate = function(e) {
      e.preventDefault()
      $state.go('sectionWrapper')
    }
  }
}());
