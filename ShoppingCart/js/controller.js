'use strict';

function storeController($scope, $routeParams, DataService) {

    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    $scope.cart.itemsChanged = function (e) {
        if (!$scope.$$phase) {
            $scope.$apply();
        }
    }


    if ($routeParams.productSku != null) {
        $scope.product = $scope.store.getProduct($routeParams.productSku);
    }
}
