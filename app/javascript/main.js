(function(){
	var app = angular.module('flightsApp', []);

	app.controller('flightsController', ['$scope', '$http', function($scope, $http){
		var vm = $scope;
		$http({
			method: 'GET',
			url: 'http://ejtestbed.herokuapp.com/flights'
		})
		.then(function successCallback(response) {
				$scope.flights = response.data;
		}, function errorCallback(response) {
				console.log(response);
		});
	}])
	.directive('flightsTemplate', function() {
  		return {
  			restrict: 'E',
    		templateUrl: 'templates/flights-template.html'
  		};
	});
}());