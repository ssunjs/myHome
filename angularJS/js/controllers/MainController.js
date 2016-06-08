app.controller('MainController', ['$scope', 'books', function($scope, books) {
  books.success(function(data) {
    $scope.books = data;
  });
}]);