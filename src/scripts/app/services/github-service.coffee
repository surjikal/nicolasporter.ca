

app.service 'github', ($http, $q, GistFactory) ->
    @API_BASE_URL = 'https://api.github.com'

    gists:
        get: (id = '') =>
            deferred = ($http.get "#{@API_BASE_URL}/gists/#{id}")
            error: (fn) -> deferred.error fn
            success: (fn) -> deferred.success (data) ->
                fn (GistFactory.make data)


app.service 'GistFactory', ->
    class Gist
        getFileContents: (filename) ->
            @files[filename]?.content

    make: (data) ->
        gist = new Gist
        return _.extend gist, data
