'use strict';

angular.module('myApp.menu', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/menu', {
            templateUrl: 'assets/index.html',
            controller: 'menu'
        });
    }])

    .controller('menu', [function() {

    }]);