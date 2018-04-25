app.controller('navBarCtrl', ['$scope', '$uibModal', '$aside', function($scope, $uibModal, $aside) {



    $scope.selectSideMenuSide = function() {
        var asideInstance = $aside.open({
            templateUrl: 'components/navbar/side-menu.html',
            placement: 'left',
            size: 'lg'
        });
    }

}])