
app.controller 'MainController', ($scope, github) ->
    $scope.selectedTechnologies = []

    $scope.setSelectedTechnologies = (technologies = []) ->
        $scope.selectedTechnologies = technologies

    $scope.getTechnologies = (experience) ->
        _.uniq _.flatten _.pluck experience.terms, 'technologies'
