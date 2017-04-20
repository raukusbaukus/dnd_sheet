(function() {
  'use strict'

  angular.module('dndSheet')
    .component('sectionWrapper', {
      bindings: {
        post: '='
      },
      controller: controller,
      templateUrl: 'templates/sectionWrapper.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      console.log('sectionWrapper init')
    }

    vm.navigate = function(e) {
      e.preventDefault()
      $state.go('sectionWrapper')
    }
  }
}());
