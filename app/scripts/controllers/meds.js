'use strict';

angular.module('tatooineApp')
  .controller('MedsCtrl', function ($scope) {
    $scope.medNames = [
      'Advil',
      'Coldarin',
      'Gelusil'
    ];

    $scope.addMed = function() {
    	$scope.medNames.push($scope.newMed);
    	$scope.newMed = "";
    }
  });
