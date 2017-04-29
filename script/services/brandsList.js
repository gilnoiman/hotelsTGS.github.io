angular.module('hotelsApp')
.factory('BrandsListService', function BrandsListServiceFactory($http){
var BrandsListService = {};
BrandsListService.brandList = {};
BrandsListService.getBrandsList = function() {
	BrandsListService.brandList = $http.get("/brands.json");
		return  BrandsListService.brandList
	  }	  
	return BrandsListService;
});