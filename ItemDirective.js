CheckoutModule.directive('item', function() {
    return {
        restrict: 'E',
        scope: {
            action: '&'
        },
        transclude: true,
        template: '<button ng-click="action({ item:fruit })"><div ng-transclude></div>{{fruit}}</button>',
        link: function(scope, element, attrs) {
            scope.fruit = attrs.name;
        }
    };
});
