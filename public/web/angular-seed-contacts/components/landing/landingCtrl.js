app.controller('landingCtrl', ['$scope','httpService','$aside',function($scope,httpService,$aside) {

	httpService.contacts(function(resp)
	{
		$scope.cards = resp.data;

	},function(err)
	{
		error("Error Fetching Contacts");
		error(err);
	});

    $scope.showDetails = function()
    {
    	var asideInstance = $aside.open({
            templateUrl: 'components/landing/contact-detail.html',
            placement: 'left',
            size: 'lg'
        });
        
    }
}]);