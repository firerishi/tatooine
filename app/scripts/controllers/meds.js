'use strict';

angular.module('tatooineApp')
.controller('MedsCtrl', function ($scope) {

	$scope.editedMedNames = null;
	$scope.shouldBeOpen = false;

	$scope.medNames = [
	{ name:'Advil', qty:30},
	{ name:'Coldarin', qty:40 },
	{ name:'Gelusil', qty:20 }
	];

	$scope.addMed = function() {
		$scope.medNames.push({ name:$scope.newMedName, qty:$scope.newMedQty });
		$scope.newMedName = "";
		$scope.newMedQty = "";
	}

	$scope.editMed = function (med) {
		$scope.editedMedNames = med;
	};

	$scope.saveMed = function (med) {
		$scope.editedMedNames = null;
		if (!med.name) {
			$scope.removeMed(med);
		}
	}

	$scope.removeMed = function(med) {
		var meds = $scope.medNames;
		meds.splice(meds.indexOf(med), 1);
	}

	$scope.open = function () {
		$scope.shouldBeOpen = true;
		console.log("open me clicked");
	}

	$scope.close = function () {
		$scope.shouldBeOpen = false;
	}

	$scope.opts = {
		backdropFade: true,
		dialogFade:true
	}

});
