var app = angular.module('personApp', [])

app.service('PersonService', function ($http) {

  // saves new names to the DB
  this.saveNames = function (name) {
    return $http.post('/person', name);
    console.log('Error saving favorite', name);
  };

  //display names currently in the DB
  this.getNames = function () {
    return $http.get('/person').then(function(response){
      return response.data;
    }).catch(function(err){
      console.log('Error getting favorites', err);
    });
  };



  this.updateNames = function (name) {
    return $http.put('/person', name);
  }

  // this.deleteNames = function () {
  //   return $http.delete('/person')
  // }



});
