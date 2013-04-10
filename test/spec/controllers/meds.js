'use strict';

describe('Controller: MedsCtrl', function () {

  // load the controller's module
  beforeEach(module('tatooineApp'));

  var MedsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedsCtrl = $controller('MedsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
