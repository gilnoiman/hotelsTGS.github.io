angular.module('hotelsApp')
.controller('hotelDetails',function($scope,$http,HotelsListService,$routeParams,BrandsListService){
	$scope.bam = $routeParams._id;

		//calling the Star Rating dropdown list function:
		$scope.starRatingOptions=starOptionsFunc();
	
		//get brands list from the service:
         BrandsListService.getBrandsList().then(function(data) {
        	$scope.brands = data.data;
        }); 

         //get hotel details from the service:
         HotelsListService.oneHotel().then(function(data) {
        	$scope.hotel = data.data[$routeParams.id];
        	//adding the viewd hotel also to the local storage
        	$scope.addViewdHotel();        
        	$scope.showDetails=true;
        	$scope.wrongMsg	=false;
        }); 


        //**here i would usually go back to the service and chave my changes but the task said not to**
        $scope.saveChanges=function(){
        	$('#alert-saving-success').show();
        }

        //push the hotel to the data storage for the "recently viewd hotels":
        $scope.addViewdHotel=function(){
	        let visitedDate = new Date();
	        var oldviews = JSON.parse(localStorage.getItem('recentlyViewdArray'))||[];
		    var newViews = {
		        'id': $routeParams.id,
		        'name': $scope.hotel.name,
		        'city': $scope.hotel.address.city,
		        'country': $scope.hotel.address.country,
		        'starRating': $scope.hotel.details.starRating,
		        'brand': $scope.hotel.details.brand,
		        'date': visitedDate.getTime(),
		        'time': visitedDate.getTime()
		    };

		    if(!containsObject(newViews,oldviews)){

		    	oldviews.push(newViews);
		    	localStorage.setItem('recentlyViewdArray', JSON.stringify(oldviews));
		    }

		}

})

//setting the star rating dropdown list:
starOptionsFunc=function(){
	let options=[];
	for(var i=0; i<=5;i=i+0.5){
		options.push({'val':i,'txt':i+' stars'});
	}			
	return options;
};



//check if the hotel is already inside the local storage:
function containsObject(obj, list) {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x].name === obj.name) {
            return true;
        }
    }

    return false;
}
