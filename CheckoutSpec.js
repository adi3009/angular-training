describe("cart total", function () {
    var checkout, priceList;
    beforeEach(function () {
        priceList = jasmine.createSpyObj("priceList", ["priceFor"]);
        priceList.priceFor.andReturn(25);
        checkout = new Checkout(priceList);
    });

    it("returns 0", function () {
        expect(checkout.total()).toEqual(0);
    });

    it("is equal to price of Kiwi", function () {
        checkout.scan('Kiwi');
        expect(checkout.total()).toEqual(25);
        expect(priceList.priceFor).toHaveBeenCalledWith('Kiwi');
    });

    it("is equal to sum of prices of two Kiwis", function () {
        checkout.scan('Kiwi');
        checkout.scan('Kiwi');
        expect(checkout.total()).toEqual(50);
        expect(priceList.priceFor).toHaveBeenCalledWith('Kiwi');
    });

    it("is equal to price of Banana when Bananas are scanned", function() {
        checkout.scan("Banana");
        expect(checkout.total()).toEqual(25);
        expect(priceList.priceFor).toHaveBeenCalledWith('Banana');
    });
});
