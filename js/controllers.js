(function() {
  'use strict';

  angular
    .module('movie')
    .controller('MainController', MainController)
    .controller('HomeController', HomeController)
    .controller('SearchController', SearchController)
    .controller('ShowController', ShowController);

  function MainController() {
    let vm = this;
  };

  function HomeController($location) {
    let vm = this;
    vm.title = "Movies for everyone!"
    vm.advance= function() {
      $location.path(`/search/${vm.movie }`);
      console.log(vm.movie);
    };

  };

  function SearchController($http, $routeParams) {
    let vm = this;
    vm.movie = $routeParams.title;
    $http.get(`http://www.omdbapi.com/?s=${vm.movie}&r=json`)
    .then((data)=> {
      vm.allMovies = data.data.Search;
      console.log(data.data.Search);
    });
  };

  function ShowController($http, $routeParams) {
    let vm = this;
    vm.id = $routeParams.id;
    $http.get(`http://www.omdbapi.com/?i=${vm.id}&r=json`)
    .then((data)=> {
      vm.thisMovie = data.data;
      console.log(data);
    });
  };


})();
