(function(){
  'use strict';

  var friend = angular.module('starter');

  friend.controller('FriendsCtrl', function($scope, Friends){
    $scope.friends = Friends.all();
  });

  friend.controller('FriendDetailCtrl', function($scope, $stateParams, Friends){
    $scope.friend = Friends.get($stateParams.friendId);
  });

})();


