CheckoutModule.filter("money", function() {
    return function(money) {
        if(!money) {
            return "£0.00";
        }

        return "£" + (money / 100).toFixed(2);
    }
});
