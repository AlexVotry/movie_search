(function () {
  'use strict';

  angular
    .module('movie', [
        'ngAnimate',
        'ngRoute'
    ])
    .config(config);

  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    })
    .when('/search/:title', {
      templateUrl: 'partials/search.html',
      controller: 'SearchController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'ShowController'
    })
  };


}());
