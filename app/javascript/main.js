(function(){
	angular
		.module('flightsApp', ['restangular'])
		.config(function(RestangularProvider) {
			RestangularProvider.setBaseUrl('http://ejtestbed.herokuapp.com');})
		.controller('flightsController', ['$scope', 'Restangular', function($scope, Restangular){
			var vm = $scope,
				FlightList = Restangular.all('flights');

				FlightList.getList()
				.then(function(data) {
					$scope.flights = data;
				});}])
		.directive('flightsSearch', function() {
			return {
				restrict: 'E',
				templateUrl: 'templates/flights-search.html'
			};
		});
}());
