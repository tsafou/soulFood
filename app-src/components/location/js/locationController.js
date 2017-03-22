/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('soulFood').controller('locationController', locationController);

locationController.$inject = ['$scope', 'uiGmapIsReady', 'uiGmapGoogleMapApi', 'Lightbox', '$timeout'];

function locationController($scope, uiGmapIsReady, uiGmapGoogleMapApi, Lightbox, $timeout) {
    var vm = this;
    $scope.mapReady = true;

    $scope.map = {
        center: {
            latitude: 40.623508,
            longitude: 22.953934
        },
        zoom: 16,
        options: {
            scrollwheel: false,
            gestureHandling: 'cooperative'
        }
    };

    $scope.markers = [{
        id: 1,
        latitude: 40.623508,
        longitude: 22.953934
    }];

    // var map; //<-- This is now available to both event listeners and the initialize() function
    // function initialize() {
    //     var mapOptions = {
    //         center: {
    //             latitude: 40.623508,
    //             longitude: 22.953934
    //         },
    //         zoom: 16,
    //         options: {
    //             scrollwheel: false,
    //             gestureHandling: 'cooperative'
    //         }
    //     };
    //     map = new google.maps.Map(document.getElementById("map"),
    //         mapOptions);
    // }
    // google.maps.event.addDomListener(window, 'load', initialize);
    // google.maps.event.addDomListener(window, "resize", function() {
    //     var center = map.getCenter();
    //     google.maps.event.trigger(map, "resize");
    //     map.setCenter(center);
    // });

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

    // $scope.mapReady = false;
    uiGmapIsReady.promise(1).then(function (instances) {
        instances.forEach(function (inst) {
            console.log("ready");
            refreshGoogleMap();
        });
    });

    function refreshGoogleMap() {
        $timeout(function () {
            $scope.mapReady = false;
            $timeout(function () {
                $scope.mapReady = true;
            })
        })
    }


}