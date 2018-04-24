    "use strict";
    var DI = [
        "ngRoute",
        "ngAnimate",
        "ui.bootstrap",
        "ngAside",
        "socialLogin",
        "satellizer"
    ];

    var win = new winDevice("myApp", DI); //Bootstrap Cordova Or Browser Based App .no ng-app Required
    var app = win.device(); // init App
    win.enable(true);
    win.info();

    app.config(['$routeProvider', '$httpProvider', 'socialProvider', '$authProvider',
        function($routeProvider, $httpProvider, socialProvider, $authProvider) {

            //socialProvider.setGoogleKey("641528930658-9l2jlgsnvk30toci6tac2slron4i0po7.apps.googleusercontent.com");
            // socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
            // socialProvider.setFbKey({ appId: "YOUR FACEBOOK APP ID", apiVersion: "API VERSION" });

            $authProvider.google({
                clientId: '641528930658-10td65a1i6p2ruhbg2kr5estqbmhktih.apps.googleusercontent.com'
            });

            $authProvider.withCredentials = true;
       


            // Google
            $authProvider.google({
                url: '/auth/google',
                authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
                redirectUri: window.location.origin,
                requiredUrlParams: ['scope'],
                optionalUrlParams: ['display'],
                scope: ['profile', 'email'],
                scopePrefix: 'openid',
                scopeDelimiter: ' ',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 452, height: 633 }
            });

            $routeProvider
                .when('/', {
                    templateUrl: 'components/landing/landing.html',
                    controller: 'landingCtrl',
                    showNav: true
                })
                .when('/not-found', {
                    templateUrl: 'components/not-found.html',
                    showNav: false

                })
                .when('/login', {
                    templateUrl: 'components/login/login.html',
                    controller : 'loginCtrl',
                    showNav: true

                })
                .otherwise({ redirectTo: '/not-found' });

        }
    ]);

    app.run(['$rootScope', function($rootScope) {

        $rootScope.$on('$routeChangeStart', function(event, current, next) {
            $rootScope.showNav = current.showNav;
        });

        $rootScope.$on('$routeChangeSuccess', function() {

        });

    }]);