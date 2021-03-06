(function(angular) {
    'use strict';
    angular
        .module('app.home', [])
        .config(homeConfig);

    // @ngInject
    function homeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home?registerForPush',
                abstract: true,
                views: {
                    'appView': {
                        templateUrl: 'features/home/home.html',
                        controller: 'HomeController as hVm'
                    }
                },
                data: {
                    authenticate: true
                }
            });

        $urlRouterProvider.when('/app/home', '/app/home/dashboard');
    }
}(angular));
