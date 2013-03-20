(function() {

  app.controller('ExperiencesController', function($scope, data) {
    return (data.query('experiences')).success(function(experiences) {
      return $scope.experiences = experiences;
    });
  });

}).call(this);
