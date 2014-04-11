'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */


describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {
	var htmlElement;

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] form')).first().getAttribute('id')).
        toMatch(/frmEdit/);
    });	
	
		
	it('should have a "Make:" label', function() {
		htmlElement = element(by.id('lblMake'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Make:');
	});
	
	it('should have a "Make" edit', function() {
		htmlElement = element(by.id('edMake'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('Honda');
	});	
	
	it('should have a "Make" span', function() {
		htmlElement = element(by.id('spMake'));
		var makeEdit = element(by.id('edMake'));
		makeEdit.clear();
		makeEdit.sendKeys('Nissan');
		expect(makeEdit.getAttribute('value')).toEqual('Nissan');
		expect(htmlElement.getText()).toEqual('Nissan');
	});	

	it('should have a "Model:" label', function() {
		htmlElement = element(by.id('lblModel'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Model:');
	});
	
	it('should have a "Model" edit', function() {
		htmlElement = element(by.id('edModel'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('Civic');
	});	
	
	it('should have a "Model" span', function() {
		htmlElement = element(by.id('spModel'));
		var modelEdit = element(by.id('edModel'));
		modelEdit.clear();
		modelEdit.sendKeys('Frontier');
		expect(modelEdit.getAttribute('value')).toEqual('Frontier');
		expect(htmlElement.getText()).toEqual('Frontier');
	});
	
	it('should have a "Year:" label', function() {
		htmlElement = element(by.id('lblYear'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Year:');
	});
	
	it('should have a "Year" edit', function() {
		htmlElement = element(by.id('edYear'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('2014');
	});	
	
	it('should have a "Year" span', function() {
		htmlElement = element(by.id('spYear'));
		var yearEdit = element(by.id('edYear'));
		yearEdit.sendKeys('2012');
		expect(yearEdit.getAttribute('value')).toEqual('2012');
		expect(htmlElement.getText()).toEqual('2012');
	});

	it('should have a "Price:" label', function() {
		htmlElement = element(by.id('lblPrice'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getText()).toEqual('Price:');
	});
	
	it('should have a "Price" edit', function() {
		htmlElement = element(by.id('edPrice'));
		expect(htmlElement).not.toBe(undefined);
		expect(htmlElement.getAttribute('value')).toEqual('24000');
	});	
	
	it('should have a "Price" span', function() {
		htmlElement = element(by.id('spPrice'));
		var PriceEdit = element(by.id('edPrice'));
		PriceEdit.clear();
		PriceEdit.sendKeys('20000');
		expect(PriceEdit.getAttribute('value')).toEqual('20000');
		expect(htmlElement.getText()).toEqual('$20,000.00');
	});			

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] th')).first().getText()).
        toMatch(/Make/);		
	});
	
	it('should have a list of cars and should have the correct number of rows', function() {
		var carsList = element.all(by.repeater('car in cars'));
		expect(carsList.count()).toBe(6);
	});
	
	it('should have "Honda" as the make in the first row', function() {
		var carsList = element.all(by.repeater('car in cars').column('{{car.make}}')).get(0);
		expect(carsList.getText()).toEqual('Honda');
	});	
	
  });
});
