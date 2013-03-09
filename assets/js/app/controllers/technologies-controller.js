(function() {

  app.controller('TechnologiesController', function($scope, technologies) {
    return $scope.technologies = technologies;
  });

}).call(this);
