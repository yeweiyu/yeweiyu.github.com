(function() {

    /**
     * hotModule Module
     *
     * Description
     */
    var listModule = angular.module('doubanApp.listModule', ['toubanApp.service']);
    listModule.controller('ListController', ['$timeout', '$scope', '$http', 'JsonpService','$routeParams','$route','$rootScope', function($timeout, $scope, $http, JsonpService,$routeParams,$route,$rootScope) {
        

        $rootScope.category = $routeParams.category;

        $rootScope.seach = function(){

            //更改路由参数
            $route.updateParams({category:'search',haha:$routeParams.curl});

        }
        var count = 5;
        //得到当前的页码
        var currentPage = parseInt($routeParams.page || 1);
        console.log($routeParams.page);
        $scope.currentPage = currentPage;

        //从第几条开始请求
        var start = (currentPage - 1) * count;

        //跨域请求豆瓣数据
        JsonpService.jsonp('https://api.douban.com/v2/movie/'+$routeParams.category, { count: count, start: start,q:$rootScope.input}, function(res) {
            console.log(res);

            $scope.subjects = res.subjects;

            //数据的总条数
            $scope.total = res.total;
            $scope.title = res.title;

            //共有几页
            $scope.totalPage = Math.ceil($scope.total / count);

            //告诉 angular 刷新界面上的数据
            $scope.$apply();

            //分页   3
            $scope.hundlePage = function  (page) {

                // if (page < 1 || page > $scope.totalPage) {
                //     return;
                // }
                /*
                if (page > 8) {
                    page = 8;
                }
                if (page < 1) {
                    page = 1;
                }
                */
                page = Math.min(Math.max(page,1),$scope.totalPage);

                //更改路由的参数,控制分页,需要用到$route
                $route.updateParams({page:page})
            }
        });


    }])

})()
