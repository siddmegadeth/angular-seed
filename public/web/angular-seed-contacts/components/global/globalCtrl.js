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

        $rootScope.logout = function() {}


       

    }
]);