var CheckoutModule = angular.module("CheckoutModule", []);

CheckoutModule.service("PriceList", PriceList);
CheckoutModule.service("Checkout", Checkout);
//CheckoutModule.service("CheckoutCtrl", CheckoutCtrl);
CheckoutModule.controller("CheckoutCtrl", CheckoutCtrl);
