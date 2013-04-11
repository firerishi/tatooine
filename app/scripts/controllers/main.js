'use strict';

angular.module('tatooineApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'Remember Meds',
      'Track Nums',
      'Capture provider Q&A'
    ];

    $scope.awesomeThingsCount = function() {
    	return $scope.awesomeThings.length;
    }

  });
