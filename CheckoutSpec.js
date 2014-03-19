describe("cart total", function () {
    var checkout;
    beforeEach(function () {
        checkout = new Checkout();
    });

    it("returns 0", function () {
        expect(checkout.total()).toEqual(0);
    });

    it("is 50 with one Kiwi", function () {
        checkout.scan('Kiwi');
        expect(checkout.total()).toEqual(50);
    });

    it("is 100 with two Kiwis", function () {
        checkout.scan('Kiwi');
        checkout.scan('Kiwi');
        expect(checkout.total()).toEqual(100);
    });

    it("is 75 when Bananas are scanned", function() {
        checkout.scan("Banana");
        expect(checkout.total()).toEqual(75);
    });
});
