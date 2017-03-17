/**
 * Created by Tsafou on 12/03/2017.
 */
angular.module('soulFood').controller('accomodationController', accomodationController);

accomodationController.$inject = ['$scope', '$mdSidenav', '$state'];

function accomodationController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.logosDimosUrl = ['http://www.thessaloniki.gr/'];
    vm.logosMediaUrl = [
        'http://www.athensvoice.gr/',
        'http://beater.gr/',
        'http://www.mixcloud.com/blackradioberlin/',
        'http://www.kasetophono.com/',
        'http://www.livemedia.gr/',
        'http://www.manstaradio.gr/',
        'http://popaganda.gr/',
        'http://publishitmagazine.gr/',
        'https://www.facebook.com/SoulfoodThessaloniki/'
    ];
    vm.logosSponsors = [
        'http://www.galileogalilei.gr',
        'http://www.facebook.com/hobostore/',
        'http://www.epiplosou.gr'
    ];
    vm.logosSupportersUrl = [
        'http://www.partyrentals.gr/',
        'http://www.facebook.com/CocktailBarSKG/',
        'http://www.facebook.com/ThermaikosBarThessaloniki/?fref=ts&__mref=message_bubble',
        'http://www.colorshotel.gr/'
    ];
    vm.logosStreetFoodUrl = [
        'http://www.brothersinlaw.gr/',
        'http://www.facebook.com/joinjuicebars/',
        'http://www.ergonfoods.com/',
        'http://www.holamexicana.gr/',
        'http://www.hotdogking.gr',
        'http://www.mongo.gr',
        'http://www.makedoniapalace.com/wine-dine/el/navona',
        'http://soupandsnack.gr/',
        'http://www.facebook.com/vanillathessaloniki/?__mref=message_bubble'
    ];

}
