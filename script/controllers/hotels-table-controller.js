 angular.module('hotelsApp').controller('hotelsTableList', ['$scope','HotelsListService','BrandsListService', function($scope,HotelsListService,BrandsListService,LastVisitedHotelsService) {
        

        //get hotsls list
        HotelsListService.getHotelList().then(function(data) {
            $scope.hotelsRowCollection = data.data;
            sortJsonArrayByProperty($scope.hotelsRowCollection, '.name');//sorting the table function with by name
            AddSortedId($scope.hotelsRowCollection);
            $scope.hotelsDisplayCollection = [].concat($scope.hotelsRowCollection);         
        }); 



        //get brands list
         BrandsListService.getBrandsList().then(function(data) {
            $scope.brands = data.data;
        });         




}]);



//sorting json file functiln
function sortJsonArrayByProperty(objArray, prop, direction){
    if (arguments.length<2) throw new Error("sortJsonArrayByProp requires 2 arguments");
    var direct = arguments.length>2 ? arguments[2] : 1; //Default to ascending

    if (objArray && objArray.constructor===Array){
        var propPath = (prop.constructor===Array) ? prop : prop.split(".");
        objArray.sort(function(a,b){
            for (var p in propPath){
                if (a[propPath[p]] && b[propPath[p]]){
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric strings to integers
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ( (a < b) ? -1*direct : ((a > b) ? 1*direct : 0) );
        });
    }
}
//sortJsonArrayByProperty(results, 'attributes.OBJECTID', -1); // this is an option for sorting upside down


//adding a sorted id:
function AddSortedId(objArray){
    for(var i=0;i<objArray.length;i++){
        objArray[i].sorted_id=i; 
    }        
    return objArray;
    };
