/**
 * Created by Tsafou on 07/07/2016.
 */
angular.module('fleaMarket').controller('stefController', stefController);

stefController.$inject = ['$scope', '$mdSidenav', '$state'];

function stefController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.slides = [
        {
            id: 0,
            path: 'assets/img/books1.jpg',
            desc: 'ΦΑΓΗΤΟ',
            subDesc: 'Δοκιμάζουμε νέες γεύσεις και διεθνείς κουζίνες'
        },
        {
            id: 1,
            path: 'assets/img/shoes1.jpg',
            desc: 'ΔΡΑΣΤΗΡΙΟΤΗΤΕΣ',
            subDesc: 'Γνωρίζουμε πρόσφυγες, φιλοζωικές οργανώσεις, μουσικές κ.α.'
        },
        {
            id: 2,
            path: 'assets/img/flea1.jpg',
            desc: 'ΑΝΟΙΧΤΗ ΑΓΟΡΑ',
            subDesc: 'Αγοράζουμε δίσκους, ρούχα, υποδήματα κ.α.'
        }
    ];

    $scope.setSearch = function (x) {
        if (x == undefined) {
            $scope.search = '';
        }
        else {
            $scope.search = x;
        }
        
    }

}