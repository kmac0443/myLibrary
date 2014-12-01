(function() {
  var app = angular.module('nav', []);

  app.controller('PageController', function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };

    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  // app.directive('nav', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'nav.html',
  //     link: ''
  //   };
  // });

  // app.directive('home', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'home.html'
  //   };
  // });

  // app.directive('reading', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'readinglist.html'
  //   };
  // });

  // app.directive('wish', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'wishlist.html'
  //   };
  // });


})();
