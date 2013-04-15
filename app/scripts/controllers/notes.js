'use strict';

angular.module('tatooineApp')
.controller('NotesCtrl', function ($scope) {

	$scope.notesList = [
		{ question:'Whats is X?', answer:'none'},
		{ question:'Whats is Y?', answer:'none'},
	];

	$scope.addNote = function() {
		$scope.notesList.push({ question:$scope.newQuestionName, answer:'' });
		$scope.newQuestionName = "";
		$scope.newAnswerName = "";
	}

	$scope.removeNote = function(note) {
		var meds = $scope.notesList;
		meds.splice(meds.indexOf(note), 1);
	}

});
