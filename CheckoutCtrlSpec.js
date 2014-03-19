describe("checkout controller", function() {
    var controller, checkout;

    beforeEach(function() {
        checkout = jasmine.createSpyObj("checkout", ["scan"]);
        controller = new CheckoutCtrl(checkout);
    });

    it("increase total on click of add", function() {
        controller.add('Kiwi');
        expect(checkout.scan).toHaveBeenCalledWith("Kiwi");
    });
});
