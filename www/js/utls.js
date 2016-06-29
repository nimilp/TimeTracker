angular.module('TimeTracker.utils',[])
.factory('utilities',[function(){

var utilities = {};

  utilities.getWeeks =  function(){
    var weeks = [];
    var curr = new Date;
    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay())).toISOString().slice(0,10);
    var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6)).toISOString().slice(0,10);
    var obj = new Object();
    obj.startDate = firstday;
    obj.endDate=lastday;
    obj.display = firstday+' to '+lastday
    weeks[0]=obj;

    var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay())).toISOString().slice(0,10);
    var firstday = new Date(new Date(curr.setDate(curr.getDate() - curr.getDay()-6))).toISOString().slice(0,10);
    var obj = new Object();
    obj.startDate = firstday;
    obj.endDate=lastday;
    obj.display = firstday+' to '+lastday
    weeks[1]=obj;
    return weeks;

};
return utilities;
}]);
