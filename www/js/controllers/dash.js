(function(){
  'use strict';

  var dash = angular.module('starter');

  dash.controller('DashCtrl', ['$state', '$rootScope', function($state, $rootScope){
    if(!$rootScope.rootuser){
      $state.go('tab.account');
    }
  }]);
})();
