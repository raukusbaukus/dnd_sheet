(function() {
  'use strict'

  angular.module('dndSheet')
    .component('loginForm', {
      bindings: {
        character: '='
      },
      controller: controller,
      templateUrl: 'templates/loginForm.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }
  }

}());
