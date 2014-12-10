angular.module('lib').controller('PageController', function($scope) {

    var pageTabs = {
        home:'home',
        reading: 'reading',
        wish: 'wish'
    };
    
    $scope.show = { home:true };

    $scope.tab = { home: true, reading: false, wish: false };

    $scope.$rootScope.showBook = function(name){
        
        for(var i in $scope.$rootScope.books) {
            if($scope.$rootScope.books[i].name == name){
                $scope.$rootScope.currentBook = $scope.$rootScope.books[i];
                break;
            }
        }

        $scope.showView('book');
    }

    $scope.showView = function(viewName) {
        
        for(var i in $scope.show) {
            
            var value = (i == viewName);
            $scope.show[i] = value;

            if(value)
                $scope.$rootScope.currentView = viewName;
        }

        var tab = pageTabs[viewName];

        for(i in $scope.tab)
            $scope.tab[i] = (i == tab);
    };

});