function CheckoutCtrl(checkout) {
    this.checkout = checkout

    this.add = function(item) {
        this.checkout.scan(item);
    }
}
