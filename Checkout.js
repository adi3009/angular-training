function PriceList() {
    this.prices = {
        "Kiwi": { "price": 40 },
        "Banana": { "price": 70 }
    };

    this.priceFor = function(item) {
        return this.prices[item].price;
    }
}

function Checkout(PriceList) {
    var total = 0;
    this.priceList = PriceList;

    this.scan = function (item) {
        total += this.priceList.priceFor(item);
    };

    this.total = function () {
        return total;
    }
}