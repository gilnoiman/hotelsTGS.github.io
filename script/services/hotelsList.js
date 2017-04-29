angular.module('hotelsApp')
.factory('HotelsListService', function HotelsServiceFactory($http){
var HotelsListService = {};
HotelsListService.hotelList = {};
HotelsListService.getHotelList = function() {
	HotelsListService.hotelList = $http.get("/hotels.json");
		return  HotelsListService.hotelList
	  };
	HotelsListService.oneHotel = function(){
		return HotelsListService.hotelList;
};	  
	return HotelsListService;
});


