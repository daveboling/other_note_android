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

    return {noteIndex: noteIndex, findNote: findNote};
  }]);
})();
