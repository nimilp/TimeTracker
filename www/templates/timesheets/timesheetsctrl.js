angular.module('TimeSheetControllers')
.controller("TimeSheetsCtrl",['$scope','$http','$stateParams','timeSheetService',function($scope,$http,$stateParams,$timeSheetService){
  var weekStartDay = $stateParams.weekStartDay;
  $scope.fetchTimeSheet = $timeSheetService.fetchTimeSheet(weekStartDay);

}]);
