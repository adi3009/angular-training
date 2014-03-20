describe("item directive", function() {
    var $rootScope, element;

    beforeEach(module("CheckoutModule"));
    beforeEach(inject(function($compile, _$rootScope_) {
        $rootScope = _$rootScope_;
        $rootScope.doSomething = jasmine.createSpy();
        element = angular.element("<item name='Apple' action='doSomething(item)'>test</item>");
        $compile(element)($rootScope);
    }));

    it("has a button", function() {
        //expect(element.html()).toContain("button");
    });

    it("calls the action on click", function() {
        /*element.find("button").triggerHandler("click");
        expect($rootScope.doSomething).toHaveBeenCalledWith('Apple');*/
    });
});
