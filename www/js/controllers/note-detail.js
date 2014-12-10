/* jshint camelcase:false */
(function(){
  'use strict';

  var noteDetail = angular.module('starter');

  noteDetail.controller('NoteDetailCtrl', ['$scope', '$stateParams', '$rootScope', 'Note', function($scope, $stateParams, $rootScope, Note){
    $scope.note = {};
    $scope.photos = [];
    Note.findNote($stateParams.noteId).then(function(res){
      $scope.note = res.data[0];
      $rootScope.currentState = $scope.note.notetitle;
    });

    $scope.takePhoto = function(){

    };

    $scope.choosePhoto = function(){

    };

  }]);
})();
