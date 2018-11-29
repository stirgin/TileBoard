window.App = angular.module('App', ['pr.longpress', 'ngRoute']);

App.config(function($sceProvider) {
   $sceProvider.enabled(false);
});

App.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
});

App.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when(ROUTER.COMMON.ROUTE, {
            template: require('../templates/tileboards/common/index.html'),
            controller: 'TileBoardMainController'
        })
        .when(ROUTER.CAMERAS.ROUTE, {
            template: require('../templates/tileboards/cameras/index.html'),
            controller: 'TileBoardMainController'
        })
        .when(ROUTER.DEFAULT.ROUTE, {
            template: require('../templates/tileboards/default/index.html'),
            controller: 'TileBoardMainController'
        }).otherwise({
            redirectTo: ROUTER.COMMON.ROUTE
        });
}]);

if(!window.CONFIG) {
   var error = 'Please make sure you have "config.js" file and it\'s a valid javascript!\n' +
      'If you running TileBoard for the first time, please rename "config.example.js" to "config.js"';

   alert(error);
}

window.Api = new HApi(CONFIG.wsUrl, CONFIG.authToken);
