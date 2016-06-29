angular.module('TimeTracker.ServiceController',[])
.controller('ServiceController',['$http','$scope','utilities',function($http,$scope,$utilities){
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
