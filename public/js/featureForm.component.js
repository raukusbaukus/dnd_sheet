(function() {
  'use strict'

  angular.module('dndSheet')
    .component('featureForm', {
      bindings: {
        character: '='
      },
      controller: controller,
      templateUrl: 'templates/featureForm.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this
    //const vm.character = 0

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }

    vm.removeFeature = function removeFeature(playerId, featureId) {
      $http.delete(`/features/${playerId}/${postId}`)
        .then(res => {
          console.log('deleted feature')
        })
    }
  }

}());
