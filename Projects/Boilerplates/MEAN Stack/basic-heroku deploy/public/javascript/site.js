var app = angular.module("BJD", ['ngRoute', 'ngResource', 'ngSanitize'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'main.html',
                controller: 'mainScreen'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    //---
    // directive
    //---
    .directive('myOnKeyDownCall', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {            
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
        });
    };
})
    ;

//---
// services
//---
/*
app.factory('listStations', function ($resource, $rootScope) {
    return $resource('/yah/listAllStations', {});
});
*/

//---
// controllers, 'mainScreen""
// Main splash screen that users hit
//---
app.controller('mainScreen', function ($scope, $http) {

    var vNewSearch = {
        MinSquareFoot: 200,
        NumSites: 1,
        UtilityServices: "PG & E"
};

    $scope.callRestService= function() {
        
  $http({method: 'GET', url: '#/owner'}).
    success(function(data, status, headers, config) {
         $scope.results.push(data);  //retrieve results and add to existing results
    })
};

});