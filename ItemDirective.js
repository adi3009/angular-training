CheckoutModule.directive('item', function() {
    return {
        restrict: 'E',
        scope: {
            action: '&'
        },
        transclude: true,
        templateUrl: 'item.html',
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name;
        }
    };
});
