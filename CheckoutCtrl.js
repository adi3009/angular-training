function CheckoutCtrl(Checkout) {
    this.checkout = Checkout

    this.add = function(item) {
        this.checkout.scan(item);
    }
}
