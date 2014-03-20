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