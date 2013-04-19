'use strict';

angular.module('tatooineApp')
.controller('NumsCtrl', function ($scope) {

	$scope.editedNums = null;

	$scope.nums = {
		weight:171, 
		heightFeet:5, 
		heightInches:11, 
		waist:31
	};

	$scope.editNums = function (nums) {
		$scope.editedNums = nums;
	};

	$scope.saveNums = function (nums) {
		$scope.editedNums = null;
	}

	
});
