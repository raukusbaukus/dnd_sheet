(function() {
  'use strict';
  
  angular.module('dndSheet').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    // this line is optional
    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'sectionWrapper',
        url: '/',
        component: 'sectionWrapper',
      })
  }

}());
