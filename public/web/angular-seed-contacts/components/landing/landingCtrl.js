app.controller('landingCtrl', ['$scope','httpService','$aside','$rootScope',function($scope,httpService,$aside,$rootScope) {

	httpService.contacts(function(resp)
	{
		$scope.cards = resp.data;

	},function(err)
	{
		error("Error Fetching Contacts");
		error(err);
	});

    $scope.showDetails = function(c)
    {
    	$rootScope.details =c;
        $rootScope.geo =[];
        $rootScope.geo.push(c.address.geo.lat);
        $rootScope.geo.push(c.address.geo.lng);
        log($rootScope.geo);
    	var asideInstance = $aside.open({
            templateUrl: 'components/landing/contact-detail.html',
            placement: 'left',
            size: 'lg'
        });
        
    }
}]);