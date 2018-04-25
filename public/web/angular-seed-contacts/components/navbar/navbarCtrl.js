app.controller('navBarCtrl', ['$scope', '$uibModal', '$aside', function($scope, $uibModal, $aside) {

    // Select HoroScope From A Popup
    $scope.selectHoroScope = function() {
        $uibModal.open({
            templateUrl: 'components/navbar/horoscope-selector.html',
            size: 'lg'
        })
    }

    $scope.selectSideMenuSide = function() {
        var asideInstance = $aside.open({
            templateUrl: 'components/navbar/side-menu.html',
            placement: 'left',
            size: 'lg'
        });
    }

}])