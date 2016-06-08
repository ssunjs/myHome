// Code goes here

(function() {
  'use strict';
  app.controller('MainCtrl', function($scope) {
    $scope.greeting = "focus"
    $scope.focus1 = {
      value:"test",
      focus:false
    }
    $scope.focus2 = {
     value:"test1",
      focus:false
    }
    $scope.focus_click = function($event,obj){
      obj.focus = !obj.focus;
    }
  });
  app.directive('focus', function($timeout) {
   return function(scope, elem, attrs) {
      scope.$watch(attrs.focus, function(newval,oldval) {
        if (newval != oldval) {
         $timeout(function() {
            window.scrollTo(0, 0);
            elem[0].focus();
          }, 0, false);
        }
      });
    };
  });
}());
