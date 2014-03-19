function CheckoutCtrl() {
    this.checkout = new Checkout();

    this.add = function(item) {
        this.checkout.scan(item);
    }
}
