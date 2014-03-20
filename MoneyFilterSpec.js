describe("money filter", function() {
    var filter;

    beforeEach(module("CheckoutModule"));
    beforeEach(inject(function(moneyFilter) {
        filter = moneyFilter;
    }));

    it("formats 0 as £0.00", function() {
        expect(filter("0")).toEqual("£0.00");
    });

    it("formats 250 as £2.50", function() {
        expect(filter("250")).toEqual("£2.50");
    });
});
