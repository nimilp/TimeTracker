angular.module('TimeTracker.HomeController',[])
.controller('HomeController',['$http','$scope','utilities','$state',function($http,$scope,$utilities,$state){
    $scope.getWeeks= function(){

      $scope.weeks = $utilities.getWeeks();
      //alert($scope.weeks);
    };
    $scope.fetchTimeSheet = function(week){
      alert(week);
        var url = "http://ip-nimil.rh-cloud.com/mytasks/times";
        var onSuccess = function(response){
          $scope.timesheet = response.data;
        };
        var onError = function(error){
          $scope.error=error.status;
        };
        $http({
          url:url,
          method:'GET'
        });
    };
}]);
