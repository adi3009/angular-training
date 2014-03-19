describe("cart total", function () {
    var checkout;
    beforeEach(function () {
        checkout = new Checkout();
    });

    it("returns 0", function () {
        expect(checkout.total()).toEqual(0);
    });

    it("is equal to price of Kiwi", function () {
        checkout.scan('Kiwi');
        expect(checkout.total()).toEqual(checkout.priceList.priceFor('Kiwi'));
    });

    it("is equal to sum of prices of two Kiwis", function () {
        checkout.scan('Kiwi');
        checkout.scan('Kiwi');
        var kiwiPrice = checkout.priceList.priceFor('Kiwi');
        expect(checkout.total()).toEqual(kiwiPrice + kiwiPrice);
    });

    it("is equal to price of Banana when Bananas are scanned", function() {
        checkout.scan("Banana");
        expect(checkout.total()).toEqual(checkout.priceList.priceFor('Banana'));
    });
});
