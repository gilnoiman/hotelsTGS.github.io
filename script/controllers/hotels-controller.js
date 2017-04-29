 angular.module('hotelsApp').controller('hotels', ['$scope', function($scope) {
        

    //recently view list:
    $scope.oldviews = JSON.parse(localStorage.getItem('recentlyViewdArray'))||[];
    $scope.oldviewsDisplayCollection = [].concat($scope.oldviews);

}]);






