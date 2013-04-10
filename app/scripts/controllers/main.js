'use strict';

angular.module('tatooineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Srinivas'
    ];

    $scope.awesomeThingsCount = function() {
    	return $scope.awesomeThings.length;
    }

  });
