function Checkout() {
    var total = 0;

    this.scan = function (item) {
    total += 50;
    }

this.total = function () {
    return total;
    }
}

describe("sum", function () {
    it("should correctly add two numbers", function () {
        expect(1 + 1).toEqual(2);
    });
});

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
});

describe("checkout controller", function() {
    var controller;

    beforeEach(function() {
        controller = new CheckoutCtrl();
    });

    it("increase total on click of add", function() {
        controller.add();
        expect(controller.checkout.total()).toEqual(50);
    });
});