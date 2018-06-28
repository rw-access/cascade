(function() {
  var app = angular.module('cascade');

  app.controller('ManageAccountController', function($http, $cookies, $scope, $state) {
      this.databases = [];

      var self = this;
      function fetchDatabases() {
        $http.get('/api/user/databases').success(function(user_databases) {
          self.databases = user_databases;
        });
      }

      fetchDatabases();

      $scope.removeDb = function(database_layer) {
        $http.post('/api/user/databases?action=remove', {database: database_layer._id}).success(function(data) {
            // console.log('Remove database result: ' + data);
            fetchDatabases();
        });
      }

      $scope.getToken = function() {
        $scope.apiToken = "eyJ1c2VybmFtZSI6IkRlbW8gdXNlciIsInBlcnNpc3RlbnQiOnRydWV9.DhXlrw.CBOmjRmHgsNJzeYT8WF9AHwq7fw";
      }
    });
})();