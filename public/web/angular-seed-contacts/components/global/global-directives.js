app.directive("routeLoader",['$rootScope',function($rootScope)
{
  return {
    restrict:'AE',
    scope :
    {
      value : '='
    },
    template : " <div class='animated-container' ng-if='value' ><div class='messaging'><h1 class='text-center'><i class='fa fa-spinner fa-pulse fa-3x fa-fw'></i><span class='sr-only'>Loading...</span></h1></div></div>",
    link : function(elem,scope,attr)
    {
        log("Executing Route Load");
    }

    };
}]);

app.directive("ajaxLoader",['$rootScope',function($rootScope)
{
  return {
    restrict:'AE',
    scope :
    {
      value : '='
    },
    template : " <div class='animated-container' ng-if='value' ><div class='messaging'><h1 class='text-center'><i class='fa fa-cog fa-spin fa-3x fa-fw'></i><span class='sr-only'>Loading...</span></h1></div></div>",
    };
}]);



app.directive("backButton",['$window',function ($window) {
    return {
        scope :
        {
            display : '='
        },
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                $window.history.back();
            });
        }
    };
}]);