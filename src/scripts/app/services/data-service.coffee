
app.factory 'gistDataBackend', (github) ->
    @GIST_ID = 5201552

    query: (collectionName) =>
        deferred = (github.gists.get @GIST_ID)
        error: (fn) -> deferred.error fn
        success: (fn) -> deferred.success (gist) ->
            fn (JSON.parse gist.getFileContents "#{collectionName}.json")


app.service 'data', (gistDataBackend) ->
    # TODO: Configurable backend perhaps?
    return gistDataBackend
