'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
  
	$scope.car = {
					make: 'Honda',
					model: 'Civic',
					year: 2014,
					price: 24000
				}	

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {
	$scope.cars=[
		{make:'Honda', model:'Civic', year:2009, price:19000},
		{make:'Honda', model:'Civic', year:2010, price:20000},
		{make:'Honda', model:'Civic', year:2011, price:21000},
		{make:'Honda', model:'Civic', year:2012, price:22000},
		{make:'Honda', model:'Civic', year:2013, price:23000},
		{make:'Honda', model:'Civic', year:2014, price:24000}
	]
  }]);