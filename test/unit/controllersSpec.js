'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
	describe('MyCtrl1', function(){
		var scope = {}, ctrl;
		
  beforeEach(module('myApp.controllers'));
  
  beforeEach(inject(function($controller) {
	scope = {};
	ctrl = $controller('MyCtrl1',{$scope: scope});
	}));


  it('should have a "car" property',(function() {
		expect(scope.car)
  }));
  
  it('should have a "car.make" property',(function() {
		expect(scope.car.make)
  }));
  
  it('should have a "model" property',(function() {
		expect(scope.car.model)
  }));

  it('should have a "year" property',(function() {
		expect(scope.car.year)
  }));
  
  it('should have a "price" property',(function() {
		expect(scope.car.price)
  }));
  
	it('"car.make should be "Honda"',(function() {
		expect(scope.car.make).toBe('Honda');
  }));
  
	it('"car.model should be "Civic"',(function() {
		expect(scope.car.model).toBe('Civic');
  }));  
});

	describe('MyCtrl2', function(){
			var scope = {}, ctrl;
			
		  beforeEach(module('myApp.controllers'));
		  
		  beforeEach(inject(function($controller) {
			scope = {};
			ctrl = $controller('MyCtrl2',{$scope: scope});
			}));

		  it('should have a "cars" property',(function() {
				expect(scope.cars)
		  }));
		  
		  it('should have 6 cars',(function() {
				expect(scope.cars.length).toBe(6)
		  }));
		  
		  it('should accept anoter car"',(function() {
				scope.cars.push({make:'Honda', model:'Civic', year:2014, price:24000});
				expect(scope.cars.length).toBe(7)
		  }));	
		  		  
		  it('2nd cars make should be "Honda"',(function() {
				expect(scope.cars[1].make).toBe('Honda')
		  }));			  
  
	});
});
