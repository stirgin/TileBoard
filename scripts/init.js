window.App = angular.module('App', ['pr.longpress', 'ngRoute']);
window.domainPath = `${DOMAIN_PATH}/`;

window.ROUTER = {
    MAIN: domainPath,
    CAMERAS: `${domainPath}cameras`
};

App.config(function($sceProvider) {
   $sceProvider.enabled(false);
});

App.config(function($locationProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
});

App.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when(ROUTER.MAIN, {
            template: require('../templates/tileboards/main/index.html'),
            controller: 'TileBoardMainController',
            resolve: {
                initialData: function() {
                    return {
                        configName: 'MAIN'
                    };
                }
            }
        })
        .when(ROUTER.CAMERAS, {
            template: require('../templates/tileboards/cameras/index.html'),
            controller: 'TileBoardMainController',
            resolve: {
                initialData: function() {
                    return {
                        configName: 'CAMERAS'
                    };
                }
            }
        }).otherwise({
            redirectTo: ROUTER.CAMERAS
        });
}]);

if(!window.CONFIG) {
   var error = 'Please make sure you have "config.js" file and it\'s a valid javascript!\n' +
      'If you running TileBoard for the first time, please rename "config.example.js" to "config.js"';

   alert(error);
}

window.Api = new HApi(CONFIG.wsUrl, CONFIG.authToken);
