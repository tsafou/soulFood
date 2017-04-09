/**
 * Created by Tsafou on 12/03/2017.
 */
angular.module('soulFood').controller('sponsorsController', sponsorsController);

sponsorsController.$inject = ['$scope', '$mdSidenav', '$state'];

function sponsorsController($scope, $mdSidenav, $state) {
    var vm = this;

    vm.sponsors = [
        {
            path: 'assets/img/sponsors/akmi.png',
            url: 'http://iek-akmi.edu.gr',
            category: 'sponsoredBy'
        },
        {
            path: 'assets/img/sponsors/tto.png',
            url: 'http://www.thessaloniki.gr',
            category: 'auspices'
        },
        {
            path: 'assets/img/sponsors/kasetophono.png',
            url: 'http://www.kasetophono.com',
            category: 'mediaSponsor'
        },
        {
            path: 'assets/img/sponsors/athensVoice.png',
            url: 'http://www.athensvoice.gr',
            category: 'mediaSponsor'
        },
        {
            path: 'assets/img/sponsors/ttf.png',
            url: 'http://foodfestival.thessaloniki.gr',
            category: 'auspices'
        },
        {
            path: 'assets/img/sponsors/galileo.png',
            url: 'http://galileogalilei.gr',
            category: 'sponsoredBy'
        },
        {
            path: 'assets/img/sponsors/join.png',
            url: 'http://joinjuicebars.gr',
            category: 'sponsoredBy'
        },
        {
            path: 'assets/img/sponsors/owl.png',
            url: 'http://www.owlclothes.com',
            category: 'clothing'
        },
        {
            path: 'assets/img/sponsors/upnloud.png',
            url: 'http://www.facebook.com/upnloud.gr/',
            category: 'poweredBy'
        },
        {
            path: 'assets/img/sponsors/blackBerlin.png',
            url: 'http://www.mixcloud.com/blackradioberlin',
            category: 'poweredBy'
        },
        {
            path: 'assets/img/sponsors/fleamarket.png',
            url: 'http://www.thefleamarketskg.com',
            category: 'poweredBy'
        },
    ];
    
    
    
    
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
