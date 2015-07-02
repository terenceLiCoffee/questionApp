(function () {
    'use strict';
    var app = angular.module('participationApp', ['ui.router']);

    app.config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/views/home.html',
                //controller:'rootCtrl'
            })
    });
})();
