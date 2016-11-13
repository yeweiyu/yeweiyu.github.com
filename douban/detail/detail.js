/**
 * Created by Administrator on 2016/10/17.
 */
(function() {

    /**
     * hotModule Module
     *
     * Description
     */
    var detailModule = angular.module('doubanApp.detailModule', ['toubanApp.service']);

    detailModule.config(['$routeProvider',function($routeProvider){

        console.log(111);
        $routeProvider.when('/detail/:movieId',{

             templateUrl:'detail/detail.html',
            controller:'DetailController'


        })

    }])

    detailModule.controller('DetailController', ['$scope', '$http', 'JsonpService','$routeParams','$route','$rootScope', function($scope, $http, JsonpService,$routeParams,$route,$rootScope) {

        var id = $routeParams.movieId;

        var adress = "https://api.douban.com/v2/movie/subject/"+id;

        //跨域请求豆瓣数据
        JsonpService.jsonp(adress, {}, function(res) {
            console.log("res===="+res);

            $scope.movie1 = res;


            //告诉 angular 刷新界面上的数据
            $scope.$apply();


        });


    }])

})()
