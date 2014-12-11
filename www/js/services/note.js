(function(){
  'use strict';

  angular.module('starter')
  .factory('Note', ['$http', 'origin', function($http, origin){
    function noteIndex(query){
      return $http.get(origin + '/notes?limit=' + query.limit + '&tagFilter=' + query.tagFilter + '&pageOffset=' + query.pageOffset);
    }

    function findNote(noteId){
      return $http.get(origin + '/notes/read/' + noteId);
    }

    function addPhoto(image, noteId){
      return $http.put(origin + '/notes/photo/add/' + noteId, {image: image});
    }

    return {noteIndex: noteIndex, findNote: findNote, addPhoto: addPhoto};
  }]);
})();
