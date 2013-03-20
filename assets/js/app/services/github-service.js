(function() {

  app.service('github', function($http, $q, GistFactory) {
    var API_BASE_URL, callApi;
    API_BASE_URL = 'https://api.github.com';
    callApi = function(endpoint, _arg) {
      var error, success, _ref;
      _ref = _arg != null ? _arg : {}, success = _ref.success, error = _ref.error;
      return $http.jsonp("" + API_BASE_URL + endpoint + "?callback=JSON_CALLBACK");
    };
    return {
      gists: {
        get: function(id) {
          var deferred;
          if (id == null) {
            id = '';
          }
          deferred = callApi("/gists/" + id);
          return {
            error: function(fn) {
              return deferred.error(fn);
            },
            success: function(fn) {
              return deferred.success(function(response) {
                console.log(response.meta);
                return fn(GistFactory.make(response.data));
              });
            }
          };
        }
      }
    };
  });

  app.factory('GistFactory', function() {
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
