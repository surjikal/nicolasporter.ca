(function() {

  app.factory('gistDataBackend', function(github) {
    var _this = this;
    this.GIST_ID = 5201552;
    return {
      query: function(collectionName) {
        var deferred;
        deferred = github.gists.get(_this.GIST_ID);
        return {
          error: function(fn) {
            return deferred.error(fn);
          },
          success: function(fn) {
            return deferred.success(function(gist) {
              return fn(JSON.parse(gist.getFileContents("" + collectionName + ".json")));
            });
          }
        };
      }
    };
  });

  app.service('data', function(gistDataBackend) {
    return gistDataBackend;
  });

}).call(this);
