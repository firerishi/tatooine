'use strict';

angular.module('tatooineApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/meds', {
        templateUrl: 'views/meds.html',
        controller: 'MedsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
