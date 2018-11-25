window.App = angular.module('App', ['pr.longpress', 'ngRoute']);

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
    const domainPath = `${DOMAIN_PATH}/`;

    const ROUTER = {
        MAIN: domainPath,
        CAMERAS: `${domainPath}cameras`
    };

    $routeProvider
        .when(ROUTER.MAIN, {
            template: `
                <p>Mains</p>
                <ul>
                   <li><a ng-href="${ROUTER.CAMERAS}">Cameras</a></li>
                </ul>
            `,
            controller: 'MainController'
        })
        .when(ROUTER.CAMERAS, {
            template: `
                <p>Camears</p>
                <ul>
                   <li><a ng-href="${ROUTER.MAIN}">Back</a></li>
                </ul>
            `,
            controller: 'MainController'
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
