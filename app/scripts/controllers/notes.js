'use strict';

angular.module('tatooineApp')
.controller('NotesCtrl', function ($scope) {

	$scope.editedNotes = null;

	$scope.notesList = [
		{ question:'Whats is X?', answer:''},
		{ question:'Whats is Y?', answer:''},
	];

	$scope.addNote = function() {
		$scope.notesList.push({ question:$scope.newQuestionName, answer:$scope.newAnswerName });
		$scope.newQuestionName = "";
		$scope.newAnswerName = "";
	}

	$scope.removeNote = function(note) {
		var meds = $scope.notesList;
		meds.splice(meds.indexOf(note), 1);
	}

	$scope.editNote = function (note) {
		$scope.editedNotes = note;
	};

	$scope.saveNote = function (note) {
		$scope.editedNotes = null;
		if (!note.question) {
			$scope.removeNote(note);
		}
	}

});
