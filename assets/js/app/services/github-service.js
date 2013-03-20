(function() {

  app.service('github', function($http, $q, GistFactory) {
    var _this = this;
    this.API_BASE_URL = 'https://api.github.com';
    return {
      gists: {
        get: function(id) {
          var deferred;
          if (id == null) {
            id = '';
          }
          deferred = $http.get("" + _this.API_BASE_URL + "/gists/" + id);
          return {
            error: function(fn) {
              return deferred.error(fn);
            },
            success: function(fn) {
              return deferred.success(function(data) {
                return fn(GistFactory.make(data));
              });
            }
          };
        }
      }
    };
  });

  app.service('GistFactory', function() {
    var Gist;
    Gist = (function() {

      function Gist() {}

      Gist.prototype.getFileContents = function(filename) {
        var _ref;
        return (_ref = this.files[filename]) != null ? _ref.content : void 0;
      };

      return Gist;

    })();
    return {
      make: function(data) {
        var gist;
        gist = new Gist;
        return _.extend(gist, data);
      }
    };
  });

}).call(this);
