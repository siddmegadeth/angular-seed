app.service('httpIntercept',["$location","$q",'$window','$rootScope',function($location,$q,$window,$rootScope) 
{
  // injector = angular.injector(["ng","ui-notification"]);
  // Notification = injector.get("Notification")
  return {
    request: function(config) {
     // Notification({message: 'Retrieved Information'}, 'success');
     $rootScope.isRouteLoading = true;
      return config;
    },

    requestError: function(config) {
      return config;
    },
    response: function(res) {
      $rootScope.isRouteLoading = false;

      if(res.status==404)
      { 
       
      }
      if(res.status==401)
      { 
       
      }
      if(res.status==402)
      { 
        
      }
      if(res.status==403)
      { 
       
      }
    return res;
    },

    responseError: function(res) {
      
      Notification({message: 'Retrieved Information Error'}, 'failure');

      status
      return res;
    }
  }
	
}]);

