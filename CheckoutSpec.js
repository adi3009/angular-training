describe("cart total", function () {
    var checkout, priceList;
    beforeEach(inject(function ($q) {
        var d = $q.defer();
        d.resolve(25);
        priceList = jasmine.createSpyObj("priceList", ["priceFor"]);
        priceList.priceFor.andReturn(d.promise);
        checkout = new Checkout(priceList);
    }));

    it("returns 0", function () {
        expect(checkout.total()).toEqual(0);
    });

    it("is equal to price of Kiwi", inject(function ($rootScope) {
        checkout.scan('Kiwi');
        $rootScope.$apply();
        expect(checkout.total()).toEqual(25);
        expect(priceList.priceFor).toHaveBeenCalledWith('Kiwi');
    }));

    it("is equal to sum of prices of two Kiwis", inject(function ($rootScope) {
        checkout.scan('Kiwi');
        checkout.scan('Kiwi');
        $rootScope.$apply();
        expect(checkout.total()).toEqual(50);
        expect(priceList.priceFor).toHaveBeenCalledWith('Kiwi');
    }));

    it("is equal to price of Banana when Bananas are scanned", inject(function ($rootScope) {
        checkout.scan("Banana");
        $rootScope.$apply();
        expect(checkout.total()).toEqual(25);
        expect(priceList.priceFor).toHaveBeenCalledWith('Banana');
    }));
});
