angular.
  module('userCards').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/stampautenti', {
          template: '<user-list></user-list>'
        }).
        
        otherwise('/users');
    }
  ]);