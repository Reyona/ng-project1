/**
 * Created by Reyona on 2017/1/9.
 */
var HomeControllers=angular.module('HomeControllers',[]);
HomeControllers.controller('TestController',['$scope',function($scope){
    $scope.user={
        name:'Cherry'
    };
}]);
