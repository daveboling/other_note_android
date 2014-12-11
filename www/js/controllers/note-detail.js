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

    //Taking a photo!
    $scope.takePhoto = function(){
      navigator.camera.getPicture(onSuccess, onFail, {quality: 10,
          destinationType: Camera.DestinationType.DATA_URL
      });
    };

    //Choosing a photo already on the phone!
    $scope.choosePhoto = function(){
      navigator.camera.getPicture(onSuccess, onFail, {quality: 10,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
    };

    function onSuccess(imageData){
      Note.addPhoto(imageData, $stateParams.noteId).then(function(res){
        $scope.notes.photo_links.push(res.data);
      });
    }

    function onFail(message){
      alert('Failed because: ' + message);
    }

  }]);
})();
