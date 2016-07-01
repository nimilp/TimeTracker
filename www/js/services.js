angular.module('TimeTracker.HomeController',[])
.controller('HomeController',['$http','$scope','utilities','$state',function($http,$scope,$utilities,$state){

    //$scope.getWeeks= function(){

      $scope.weeks = $utilities.getWeeks();
      //alert($scope.weeks);
    //};
    
}]);
