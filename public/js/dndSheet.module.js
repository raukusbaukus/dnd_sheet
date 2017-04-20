var dndSheet = angular.module('dndSheet', ['ui.router']);

(function(dndSheet){
    'use strict';
    dndSheet.controller("sheetCtrl", function($scope, $http){
      const playerId = 1 //$stateParams.id
      $http.get(`/all/${playerId}`).then(character => {
        $scope.data = character.data //how to get this on global scope?
        console.log('character', $scope.data)
      })
  });
})(dndSheet);
