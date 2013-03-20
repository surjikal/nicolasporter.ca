
app.controller 'ExperiencesController', ($scope, data) ->

    (data.query 'experiences').success (experiences) ->
        $scope.experiences = experiences
