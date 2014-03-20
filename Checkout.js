function Checkout(PriceList) {
    var total = 0;
    this.priceList = PriceList;

    this.scan = function (item) {
        this.priceList.priceFor(item).then(function(price) {
            total += price;
        });
    };

    this.total = function () {
        return total;
    }
}