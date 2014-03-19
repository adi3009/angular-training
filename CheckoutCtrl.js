function CheckoutCtrl() {
    this.checkout = new Checkout();

    this.add = function() {
        this.checkout.scan();
    }
}
