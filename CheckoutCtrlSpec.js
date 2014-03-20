describe("checkout controller", function() {
    var controller, checkout, priceList, d;

    beforeEach(inject(function($q) {
        checkout = jasmine.createSpyObj("checkout", ["scan"]);
        priceList = jasmine.createSpyObj("priceList", ["priceFor"]);

        d = $q.defer();

        priceList.priceFor.andReturn(d.promise);
        controller = new CheckoutCtrl(checkout, priceList);
    }));

    it("increase total on click of add", function() {
        controller.add('Kiwi');
        expect(checkout.scan).toHaveBeenCalledWith("Kiwi");
    });

    it("checks the price and sets checkedPrice", inject(function($rootScope) {
        d.resolve(25);
        controller.priceCheck('Kiwi');
        $rootScope.$apply();
        expect(controller.checkedPrice).toEqual(25);
    }));

    it("checks the price and sets checkedPrice", inject(function($rootScope) {
        d.resolve(42);
        controller.priceCheck('Kiwi');
        $rootScope.$apply();
        expect(controller.checkedPrice).toEqual(42);
    }));
});
