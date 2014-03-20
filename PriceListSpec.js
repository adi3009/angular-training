describe("a price list", function () {
    var priceList, $httpBackend;
    var data = { "prices": { "Kiwi": {"price": "25" } } }

    beforeEach(inject(function($injector, $http, $q) {
        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.when('GET').respond(data);
        priceList = new PriceList($http, $q);
    }));

    it("collects prices from the back end", function() {
        var output;
        priceList.getPrices().then(function(prices) {
            output = prices;
        });

        $httpBackend.flush();
        expect(output).toEqual(data.prices);
    });

    it("gets price for an item", function() {
        var output;
        priceList.priceFor('Kiwi').then(function(price) {
            output = price;
        });
        $httpBackend.flush();
        expect(output).toEqual(parseInt(data.prices.Kiwi.price));
    });
});
