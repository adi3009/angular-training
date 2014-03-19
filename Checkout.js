function Checkout() {
    var total = 0;

    this.priceList = {
        "Kiwi": { "price": 50 },
        "Banana": { "price": 75 }
    };

    this.scan = function (item) {
        total += this.priceList[item].price;
    }

    this.total = function () {
        return total;
    }
}