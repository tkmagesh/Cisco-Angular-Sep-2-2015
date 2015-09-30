'use strict';

angular.module('myApp.greet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/greet', {
    templateUrl: 'greet/greet.html',
    controller: 'greetController'
  });
}])

.controller('greetController', ['$scope', function($scope) {
    $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = "Hi " + $scope.name + ", Have a nice day!";
    };
}])

 .filter("trimText", function(defaultTrimLength){
            return function(data, trimLength){
                trimLength = trimLength || defaultTrimLength;
                return data.length > trimLength ? data.substr(0,trimLength) + '...' : data;
            }
        })
    .value('defaultTrimLength',20);
