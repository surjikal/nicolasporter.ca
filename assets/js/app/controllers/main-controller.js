(function() {

  app.controller('MainController', function($scope, github) {
    $scope.selectedTechnologies = [];
    $scope.setSelectedTechnologies = function(technologies) {
      if (technologies == null) {
        technologies = [];
      }
      return $scope.selectedTechnologies = technologies;
    };
    return $scope.getTechnologies = function(experience) {
      return _.uniq(_.flatten(_.pluck(experience.terms, 'technologies')));
    };
  });

}).call(this);
