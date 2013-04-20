'use strict';

angular.module('tatooineApp')
.controller('NumsCtrl', function ($scope) {

	$scope.editedNums = null;

	$scope.nums = {
		weight: 171, 
		heightFeet: 5, 
		heightInches: 11, 
		waist: 31,
		pulse: 75,
		bpSys: 99,
		bpDia: 66,
		glucose: 90
	};

	$scope.editNums = function (numType) {		
		$scope.editedNums = numType;
		console.log($scope.editedNums);
	};

	$scope.saveNums = function (nums) {
		$scope.editedNums = null;
		console.log("save ", nums);
	}

	
});
