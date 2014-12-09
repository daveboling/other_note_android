(function(){
  'use strict';

  var account = angular.module('starter');

  account.controller('AccountCtrl', ['$scope', '$rootScope', '$state', 'User', function($scope, $rootScope, $state, User){
    $scope.user = {};

    $scope.login = function(){
      User.login($scope.user).then(function(response){
        $rootScope.rootuser = response.data;
        $state.go('tab.dash');
      }, function(){
        $scope.user = {};
      });
    };

    $scope.logout = function(){
      User.logout().then(function(res){
        $rootScope.rootuser = null;
      });
    };

  }]);
})();
