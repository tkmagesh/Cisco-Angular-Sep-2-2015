'use strict';

describe('myApp.greet module', function() {

  beforeEach(module('myApp.greet'));

  describe('greet controller', function(){

    it('should have the name initialized to empty string', inject(function($controller) {
        var dummyScope = {};
        $controller("greetController", { $scope : dummyScope });
        expect(dummyScope.name).toBe('');
    }));

    it('should populate greetMsg when greeted', inject(function($controller) {
        var dummyScope = {};
        $controller("greetController", { $scope : dummyScope });
        dummyScope.name = 'Magesh';
        var expectedResult = 'Hi Magesh, Have a nice day!';
        dummyScope.greet();
        expect(dummyScope.greetMsg).toBe(expectedResult);
    }));

  });

  describe('trimText filter', function(){

      it("should return the original string for a short string", inject(function($filter){
          var trimTextFilter = $filter('trimText');
          var input = "short string",
              expectedResult = input;
          var result = trimTextFilter(input);
          expect(result).toBe(expectedResult);
      }));
      it("should return the trimmed string for a long string", inject(function($filter){
          var trimTextFilter = $filter('trimText');
          var input = "this is a relatively loooooooong string",
              expectedResult = input.substr(0,20) + '...';
          var result = trimTextFilter(input, 20);
          expect(result).toBe(expectedResult);
      }));
  });
});
