angular.module('TimeSheetServiceFactory',[])
.factory('timeSheetService',['$http',function($http){
  var timeSheetService={};
  timeSheetService.fetchTimeSheet = function(weekStartDay){
    //  alert(weekStartDay);
      var url = "http://ip-nimil.rhcloud.com/mytask/times";
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
    return timeSheetService;
}])
