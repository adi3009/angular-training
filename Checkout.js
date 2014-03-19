function Checkout() {
    var total = 0;

    this.scan = function (item) {
        total += 50;
    }

    this.total = function () {
        return total;
    }
}