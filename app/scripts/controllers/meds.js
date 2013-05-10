'use strict';

angular.module('tatooineApp')
.controller('MedsCtrl', function ($scope) {

	$scope.editedMedNames = null;
	$scope.shouldBeOpen = false;

	$scope.medNames = [
	{ name:'Advil', qty:30, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Coldarin', qty:40, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Gelusil', qty:20, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Advil', qty:30, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Coldarin', qty:40, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Gelusil', qty:20, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Advil', qty:30, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Coldarin', qty:40, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Gelusil', qty:20, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Advil', qty:30, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Coldarin', qty:40, frequency: 'Daily', type: 'Pill', method: 'oral' },
	{ name:'Gelusil', qty:20, frequency: 'Daily', type: 'Pill', method: 'oral' }
	];

	$scope.addMed = function() {
		$scope.medNames.push ({ 
			name:$scope.newMedName, 
			qty:$scope.newMedQty, 
			frequency:$scope.newMedFreq, 
			type:$scope.newMedType,
			method:$scope.newMedMthd 
		});
		$scope.newMedName = "";
		$scope.newMedQty = "";
		$scope.newMedFreq = "";
		$scope.newMedType = "";
		$scope.newMedMthd = "";
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
