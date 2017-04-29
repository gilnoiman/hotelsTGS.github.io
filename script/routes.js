angular.module('hotelsApp')
.config(["$routeProvider",function($routeProvider) {
	$routeProvider.when('/hotel-details',{
		templateUrl: '/templates/pages/hotel-details.html',
		controller:'hotelDetails'
	})

	.when('/hotels-list',{
		templateUrl: '/templates/pages/hotels-list.html',
		controller:'hotels'
	})

	.when('/hotel-details/:id',{
		templateUrl: '/templates/pages/hotel-details.html',
		controller:'hotelDetails'
	})	
	
	.when('/',{
		templateUrl: '/templates/pages/hotels-list.html',
		controller:'hotels'
	})	


	.otherwise({redirectTo:'/'});

}]);