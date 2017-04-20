var app = angular.module('dndSheet', ['ui.router']);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.hello = "D&D Sheet yee"
}])

app.factory('character', () => {
  const state = {
    data: {
      // ability = {}
      //       ability.minMax = 0
      //       ability.strBase = 8
      //       ability.dexBase = 8
      //       ability.conBase = 8
      //       ability.intBase = 8
      //       ability.wisBase = 8
      //       ability.chaBase = 8
      //       ability.strBonus = 0
      //       ability.dexBonus = 0
      //       ability.conBonus = 0
      //       ability.intBonus = 0
      //       ability.wisBonus = 0
      //       ability.chaBonus = 0
      //       ability.strASI = 0
      //       ability.dexASI = 0
      //       ability.conASI = 0
      //       ability.intASI = 0
      //       ability.wisASI = 0
      //       ability.chaASI = 0
    }
  };
})

app.component('abilityForm', {

  templateUrl: '/templates/abilityForm.html',
  bindings: {
    post: '='
  },

  //controller.$inject = ['$state']

  controller: function($state) {
    const vm = this

    vm.getCost = function getCost(val) {
      let cost = val - 8
      if (val > 13) {
        cost += (val - 13)
      }
      return cost
    }

    vm.navigate = function(e) {
      e.preventDefault()
      $state.go('create')
    }

    vm.updateAbils = function updateAbils() {
      vm.ability.strTotal = vm.ability.strBase + vm.ability.strBonus + vm.ability.strASI
      vm.ability.dexTotal = vm.ability.dexBase + vm.ability.dexBonus + vm.ability.dexASI
      vm.ability.conTotal = vm.ability.conBase + vm.ability.conBonus + vm.ability.conASI
      vm.ability.intTotal = vm.ability.intBase + vm.ability.intBonus + vm.ability.intASI
      vm.ability.wisTotal = vm.ability.wisBase + vm.ability.wisBonus + vm.ability.wisASI
      vm.ability.chaTotal = vm.ability.chaBase + vm.ability.chaBonus + vm.ability.chaASI
      vm.ability.strCost = vm.getCost(vm.ability.strBase)
      vm.ability.dexCost = vm.getCost(vm.ability.dexBase)
      vm.ability.conCost = vm.getCost(vm.ability.conBase)
      vm.ability.intCost = vm.getCost(vm.ability.intBase)
      vm.ability.wisCost = vm.getCost(vm.ability.wisBase)
      vm.ability.chaCost = vm.getCost(vm.ability.chaBase)
      vm.ability.strMod = Math.floor((vm.ability.strTotal - 10) / 2)
      vm.ability.dexMod = Math.floor((vm.ability.dexTotal - 10) / 2)
      vm.ability.conMod = Math.floor((vm.ability.conTotal - 10) / 2)
      vm.ability.intMod = Math.floor((vm.ability.intTotal - 10) / 2)
      vm.ability.wisMod = Math.floor((vm.ability.wisTotal - 10) / 2)
      vm.ability.chaMod = Math.floor((vm.ability.chaTotal - 10) / 2)
      vm.ability.ASIreq = Math.ceil((vm.ability.strASI + vm.ability.dexASI + vm.ability.conASI + vm.ability.intASI + vm.ability.wisASI + vm.ability.chaASI) / 2)
      vm.ability.pointCost = vm.ability.strCost + vm.ability.dexCost + vm.ability.conCost + vm.ability.intCost + vm.ability.wisCost + vm.ability.chaCost
    }

    vm.$onInit = function $onInit() {
      vm.ability = {}
      vm.ability.minMax = 0
      vm.ability.strBase = 8
      vm.ability.dexBase = 8
      vm.ability.conBase = 8
      vm.ability.intBase = 8
      vm.ability.wisBase = 8
      vm.ability.chaBase = 8
      vm.ability.strBonus = 0
      vm.ability.dexBonus = 0
      vm.ability.conBonus = 0
      vm.ability.intBonus = 0
      vm.ability.wisBonus = 0
      vm.ability.chaBonus = 0
      vm.ability.strASI = 0
      vm.ability.dexASI = 0
      vm.ability.conASI = 0
      vm.ability.intASI = 0
      vm.ability.wisASI = 0
      vm.ability.chaASI = 0
      vm.updateAbils()
    }

  }

});

app.component('skillForm', {

  templateUrl: '/templates/skillForm.html',
  bindings: {
    post: '='
  },

  controller: function($state) {
    const vm = this
  }
});

app.component('sectionWrapper', {

  templateUrl: '/templates/sectionWrapper.html',


  controller: function($state) {
    const vm = this
  }
});
