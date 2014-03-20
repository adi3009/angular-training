function PriceList() {
    this.prices = {
        "Kiwi": { "price": 40 },
        "Banana": { "price": 70 }
    };

    this.priceFor = function(item) {
        return this.prices[item].price;
    }
}
