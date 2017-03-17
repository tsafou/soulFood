/**
 * Created by Tsafou on 07/07/2016.
 */
/**
 * Created by Tsafou on 04/06/2016.
 */
angular.module('soulFood').controller('homeController', homeController);

homeController.$inject = ['$scope', '$mdSidenav', '$state'];

function homeController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.slides = [
        {
            id: 0,
            path: 'assets/img/flea1.jpg',
            desc: 'Flea Market',
            subDesc: 'Αγοράζουμε δίσκους, ρούχα, υποδήματα κ.α.'
        },
        {
            id: 1,
            path: 'assets/img/streetFood.jpg',
            desc: 'Street Food',
            subDesc: 'Δοκιμάζουμε νέες γεύσεις και διεθνείς κουζίνες'
        },
        {
            id: 2,
            path: 'assets/img/activities.jpg',
            desc: 'Activities',
            subDesc: 'Γνωρίζουμε πρόσφυγες, φιλοζωικές οργανώσεις, μουσικές κ.α.'
        }
    ];

    vm.active = 0;
    vm.interval = 5000;
    vm.noWrapSlides = false;

}