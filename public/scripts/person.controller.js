var app = angular.module('personApp', [])

app.controller('PersonController', function(PersonService) {
  console.log('PersonController loaded')

  var ctrl = this;

  PersonController.saveNames().then(function(name){
    ctrl.personList = name
  })

});
