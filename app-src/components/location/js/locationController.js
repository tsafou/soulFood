/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('fleaMarket').controller('locationController', locationController);

locationController.$inject = ['$scope', 'uiGmapIsReady', 'uiGmapGoogleMapApi'];

function locationController($scope, uiGmapIsReady, uiGmapGoogleMapApi) {
    var vm = this;

    $scope.map = {
        center: {
            latitude: 40.623508,
            longitude: 22.953934
        },
        zoom: 16,
        options: {scrollwheel: false}
    };

    $scope.markers = [{
        id: 1,
        latitude: 40.623508,
        longitude: 22.953934
    }];

    // uiGmapGoogleMapApi.then(function(maps) {
    //     $scope.map = {
    //         center: {
    //             latitude: 40.578412,
    //             longitude: 23.021786
    //         },
    //         zoom: 8,
    //         options: {scrollwheel: false}
    //     };
    //
    //     $scope.markers = [{
    //         id: 1,
    //         latitude: 40.578412,
    //         longitude: 23.021786
    //     }];
    //
    // });

}