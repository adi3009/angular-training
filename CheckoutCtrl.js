function CheckoutCtrl(Checkout, PriceList) {
    this.checkout = Checkout

    this.add = function(item) {
        this.checkout.scan(item);
    }

    this.checkedPrice = 0;

    this.priceCheck = function(item) {
        var that = this;
        PriceList.priceFor(item).then(function(price) {
            that.checkedPrice = price;
        });
    }
}
