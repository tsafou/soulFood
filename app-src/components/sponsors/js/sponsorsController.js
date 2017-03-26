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
            url: '',
            category: 'sponsor'
        },
        {
            path: 'assets/img/sponsors/heart.png',
            url: '',
            category: 'media'
        },
        {
            path: 'assets/img/sponsors/kasetophono.png',
            url: 'media',
            category: ''
        },
        {
            path: 'assets/img/sponsors/smile.png',
            url: '',
            category: 'sponsor'
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
