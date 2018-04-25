app.service('httpService',['$http',function($http) {

    var contactCache = [];
    return {

        contacts: function(cb) {
            if (contactCache.length!=0) {
                cb(contactCache);
            } else {

                $http({
                    method: "GET",
                    url: '/api/contacts'
                }).then(function(resp) {
                	log(resp);
                    contactCache = resp;
                    cb(contactCache);
                })

            }

        }
    }

}]);