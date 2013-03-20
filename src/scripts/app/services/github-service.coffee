

app.service 'github', ($http, $q, GistFactory) ->
    API_BASE_URL = 'https://api.github.com'

    callApi = (endpoint, {success, error} = {}) ->
        $http.jsonp "#{API_BASE_URL}#{endpoint}?callback=JSON_CALLBACK"

    gists:
        get: (id = '') ->
            deferred = callApi "/gists/#{id}"
            error: (fn) -> deferred.error fn
            success: (fn) -> deferred.success (response) ->
                console.log response.meta
                fn (GistFactory.make response.data)


app.factory 'GistFactory', ->
    class Gist
        getFileContents: (filename) ->
            @files[filename]?.content

    make: (data) ->
        gist = new Gist
        return _.extend gist, data



# 613 841 8122