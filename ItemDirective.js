CheckoutModule.directive('item', function() {
    return {
        restrict: 'E',
        scope: {
            action: '&'
        },
        template: '<button ng-click="action({ item:fruit })">{{fruit}}</button>',
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name;
        }
    };
});
