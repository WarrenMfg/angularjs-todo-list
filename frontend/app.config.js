angular.module('app').config([
  '$routeProvider',
  function config($routeProvider) {
    $routeProvider.when('/', {
      template: '<todo-list></todo-list>'
    });
  }
]);
