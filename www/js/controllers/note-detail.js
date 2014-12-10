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

    function onSuccess(imageData){
      console.log(imageData);
    }

    function onFail(message){
      alert('Failed because: ' + message);
    }

    //Choosing a photo already on the phone!
    $scope.choosePhoto = function(){

    };

  }]);
})();
