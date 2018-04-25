app.controller('globalCtrl', ['$scope', '$rootScope', '$location', '$uibModal', '$auth',
    function($scope, $rootScope, $location, $uibModal, $auth) {

        $rootScope.isActive = function(loc) {

            return loc === $location.path();
        }

        $rootScope.$on('event:social-sign-in-success', function(event, userDetails) {
            $rootScope.isRouteLoading = true;
            log(userDetails);
        })

        $rootScope.$on('event:social-sign-out-success', function(event, logoutStatus) {

            alert("Logged Out");
            log(logoutStatus);
        })

        $scope.authenticate = function(provider) {
            log("Provider Is : " + provider);
            $auth.authenticate(provider)
                .then(function(response) {
                    // Signed in with Google.
                    log("Response ");
                    log(response);
                })
                .catch(function(response) {
                    // Something went wrong.
                });
        };

        $rootScope.logout = function() {
        }


        $scope.about = [
            { 'text': 'About Us' },
            { 'text': 'About Rashi' }
        ];

        $scope.consulting = [
            { text: 'Vedic Astrology Consultant' },
            { text: 'Vedic Shastra Consultancy' },
            { text: 'Numerologist' },
            { text: 'Gemologist' },
            { text: 'Specialist In All Types Of Pooja' },
            { text: 'Palm Reading' },
            { text: 'Face Reading' },
            { text: 'Reiki' },
            { text: 'NaturoPathy' }

        ];

        $scope.shop = [
            { text: 'AstroShop' },
            { text: 'Buy Services' },
            { text: 'Payments' },
        ];

        $scope.support = [
            { text: 'Reach Us' },
            { text: 'FAQ' },
        ];


        $scope.horoscope = [
            { text: 'Aries' },
            { text: 'Tauras' },
            { text: 'Gemini' },
            { text: 'Cancer' },
            { text: 'Leo' },
            { text: 'Virgo' },
            { text: 'Libra' },
            { text: 'Scorpio' },
            { text: 'Sagittarius' },
            { text: 'Capricorn' },
            { text: 'Aquarius' },
            { text: 'Pieces' },


        ];


    }
]);