/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket').controller('contactController', contactController);

contactController.$inject = ['$scope', '$mdSidenav', '$state', '$timeout', '$http'];

function contactController($scope, $mdSidenav, $state, $timeout, $http) {
    var vm = this;

    vm.showSuccess = false;

    $scope.person = {};

    vm.sendEmail = function () {

        $http({
            method  : 'POST',
            url     : 'php/email.php',
            data    : $.param($scope.person),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })
            .then(function success(data) {
                $timeout(function() {
                    vm.showFailure = false;
                    $scope.person = {};
                    $scope.contactForm.$setPristine();
                    $scope.contactForm.$setUntouched();
                    vm.showSuccess = true;
                }, 1500);
                $timeout(function () {
                    vm.showSuccess = false;
                }, 5500);

            }, function error(data) {
                vm.showSuccess = false;
                vm.showFailure = true;
            });

    }

}