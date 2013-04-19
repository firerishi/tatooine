'use strict';

describe('Controller: NumsCtrl', function () {

  // load the controller's module
  beforeEach(module('tatooineApp'));

  var NumsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NumsCtrl = $controller('NumsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
