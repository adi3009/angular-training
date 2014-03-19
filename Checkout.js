function PriceList() {
    this.prices = {
        "Kiwi": { "price": 50 },
        "Banana": { "price": 75 }
    };

    this.priceFor = function(item) {
        return this.prices[item].price;
    }
}

function Checkout() {
    var total = 0;
    this.priceList = new PriceList;

    this.scan = function (item) {
        total += this.priceList.priceFor(item);
    }

    this.total = function () {
        return total;
    }
}