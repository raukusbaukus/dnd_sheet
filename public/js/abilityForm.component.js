(function() {
  'use strict'

  angular.module('dndSheet')
    .component('abilityForm', {
      bindings: {
        post: '='
      },
      controller: controller,
      templateUrl: 'templates/abilityForm.html'
    })

  controller.$inject = ['$scope', '$state', '$stateParams', '$http']

  function controller($scope, $state, $stateParams, $http) {
    const vm = this

    vm.$onInit = function $onInit() {
      //console.log($scope, $scope.data)
    }

    vm.getCost = function getCost(val) {
      let cost = val - 8
      if (val > 13) {
        cost += (val - 13)
      }
      return cost
    }

    vm.updateAbils = function updateAbils() {
      vm.character.abils.strTotal = vm.character.abils.strBase + vm.character.abils.strBonus + vm.character.abils.strASI
      vm.character.abils.dexTotal = vm.character.abils.dexBase + vm.character.abils.dexBonus + vm.character.abils.dexASI
      vm.character.abils.conTotal = vm.character.abils.conBase + vm.character.abils.conBonus + vm.character.abils.conASI
      vm.character.abils.intTotal = vm.character.abils.intBase + vm.character.abils.intBonus + vm.character.abils.intASI
      vm.character.abils.wisTotal = vm.character.abils.wisBase + vm.character.abils.wisBonus + vm.character.abils.wisASI
      vm.character.abils.chaTotal = vm.character.abils.chaBase + vm.character.abils.chaBonus + vm.character.abils.chaASI
      vm.character.abils.strCost = vm.getCost(vm.character.abils.strBase)
      vm.character.abils.dexCost = vm.getCost(vm.character.abils.dexBase)
      vm.character.abils.conCost = vm.getCost(vm.character.abils.conBase)
      vm.character.abils.intCost = vm.getCost(vm.character.abils.intBase)
      vm.character.abils.wisCost = vm.getCost(vm.character.abils.wisBase)
      vm.character.abils.chaCost = vm.getCost(vm.character.abils.chaBase)
      vm.character.abils.strMod = Math.floor((vm.character.abils.strTotal - 10) / 2)
      vm.character.abils.dexMod = Math.floor((vm.character.abils.dexTotal - 10) / 2)
      vm.character.abils.conMod = Math.floor((vm.character.abils.conTotal - 10) / 2)
      vm.character.abils.intMod = Math.floor((vm.character.abils.intTotal - 10) / 2)
      vm.character.abils.wisMod = Math.floor((vm.character.abils.wisTotal - 10) / 2)
      vm.character.abils.chaMod = Math.floor((vm.character.abils.chaTotal - 10) / 2)
      vm.character.abils.ASIreq = Math.ceil((vm.character.abils.strASI + vm.character.abils.dexASI + vm.character.abils.conASI + vm.character.abils.intASI + vm.character.abils.wisASI + vm.character.abils.chaASI) / 2)
      vm.character.abils.pointCost = vm.character.abils.strCost + vm.character.abils.dexCost + vm.character.abils.conCost + vm.character.abils.intCost + vm.character.abils.wisCost + vm.character.abils.chaCost
    }

    //   vm.submit = function() {
    //     const postId = $stateParams.id
    //     let savedPost = vm.post
    //     $http.patch(`/api/posts/${postId}`, savedPost).then(post => {
    //       vm.post = {}
    //       $state.go('posts')
    //     })
    //   }
    //
    //   vm.delete = function(id) {
    //     const postId = $stateParams.id
    //     $http.delete(`/api/posts/${postId}`).then(() => {
    //       $state.go('posts')
    //     })
    //   }
    // }
  }
}());
