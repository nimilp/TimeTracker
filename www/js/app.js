// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('TimeTracker', ['ionic','TimeTracker.utils','TimeTracker.HomeController','TimeTracker.states','TimeSheetControllers','TimeSheetServiceFactory'])

.run(function($ionicPlatform,$rootScope,$ionicLoading) {
  $ionicPlatform.ready(function() {
    var mainTheme='bar-stable';
    if(ionic.Platform.isAndroid()){
      mainTheme='bar-positive';
    }
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
  $rootScope.$on('loading:show',function(){
        $ionicLoading.show({
            template:'<p>Loading...</p><ion-spinner></ion-spinner>'
        })
    })
    $rootScope.$on('loading:hide',function(){
        $ionicLoading.hide()
    })
})
.config(function($httpProvider){
    $httpProvider.interceptors.push(function($rootScope){
        return{
            request: function(config){
                $rootScope.$broadcast('loading:show')
                return config
            },
            response: function(response){
                $rootScope.$broadcast('loading:hide')
                return response
            }
        }
    })
})
