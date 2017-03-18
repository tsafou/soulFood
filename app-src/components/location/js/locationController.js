/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('soulFood').controller('locationController', locationController);

locationController.$inject = ['$scope', 'uiGmapIsReady', 'uiGmapGoogleMapApi', 'Lightbox'];

function locationController($scope, uiGmapIsReady, uiGmapGoogleMapApi, Lightbox) {
    var vm = this;

    $scope.map = {
        center: {
            latitude: 40.623508,
            longitude: 22.953934
        },
        zoom: 16,
        options: {scrollwheel: false},
        gestureHandling: 'cooperative'
    };

    $scope.markers = [{
        id: 1,
        latitude: 40.623508,
        longitude: 22.953934
    }];

    vm.gallery = [
        {
            title: 'klmk;m',
            url: 'assets/img/activities.jpg'
        },
        {
            title: 'klmk;m',
            url: 'assets/img/clothes.jpg'
        },
        {
            title: 'klmk;m',
            url: 'assets/img/streetFood.jpg'
        }
    ];
    $scope.openLightboxModal = function (index) {
        Lightbox.openModal(vm.gallery, index, null);
    };

}