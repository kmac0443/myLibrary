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

  app.controller('BookController', function() {
    
  })

})();
