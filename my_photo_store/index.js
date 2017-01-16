/**
 * Created by Reyona on 2017/1/9.
 */
var app=angular.module('my-photo-store',[
    'ngRoute',
    'HomeControllers',
    'AlbumControllers'
]);
app.config(['$locationProvider','$routeProvider',function($locationProvider,$routeProvider){
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
        .when('/',{//http://localhost:63342/my_photo_store/#!/
            templateUrl:'pages/home/home.html',
            controller:'TestController'
        })
        .when('/album',{//http://localhost:63342/my_photo_store/#!/album
            templateUrl:'pages/album/album.html',
            controller:'TestController2'
        })
        .otherwise({
            redirectTo:'/'
        });
}]);