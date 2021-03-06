'use strict';

// Declare app level module which depends on views, and components
angular.module('soulFood', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngMdIcons',
    'ui.bootstrap',
    'md.data.table',
    'bootstrapLightbox',
    'angular-loading-bar',
    'ngSanitize',
    'pascalprecht.translate',
    'uiGmapgoogle-maps'
]).config(['$locationProvider', '$urlRouterProvider', '$stateProvider', '$mdThemingProvider', 'cfpLoadingBarProvider', '$translateProvider', 'uiGmapGoogleMapApiProvider', function ($locationProvider, $urlRouterProvider, $stateProvider, $mdThemingProvider, cfpLoadingBarProvider, $translateProvider, uiGmapGoogleMapApiProvider) {
    // $locationProvider.hashPrefix('!');
    cfpLoadingBarProvider.includeSpinner = false;

    $urlRouterProvider.otherwise('home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'components/home/tpl/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            data: {
                title: 'Home',
                description: "The creative team of SoulFood Thessaloniki (Upnloud & Black Radio Berlin) proudly presents the 1st Thessaloniki Street Food Festival! The dates of the Festival are Saturday 29 & Sunday 30 April from 10 a.m. until 10 p.m. and it will take place at the new Town Hall of Thessaloniki.",
            }
            // views: {
            //     "viewA": { templateUrl: "components/home/tpl/partial-home-list.html",
            //         controller: function($scope) {
            //             $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            //         }}
            // }
        })

        // nested list with custom controller
        // .state('home.list', {
        //     url: '/list',
        //     templateUrl: 'components/home/tpl/partial-home-list.html',
        //     controller: function ($scope) {
        //         $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        //     }
        // })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'components/about/tpl/about.html',
            controller: 'aboutController',
            controllerAs: 'aboutCtrl',
            data: {
                title: 'About',
                description: "Our objective is to create a two-day celebration, open to everyone! Through flavours, we want to search for and present the common identity, but also meet something foreign, and explore new flavours. A “tasteful” village will be established for 2 days, with different cuisines and music from our city’s DJs.",
            }
        })

        .state('accommodation', {
            url: '/accommodation',
            templateUrl: 'components/accommodation/tpl/accommodation.html',
            controller: 'accommodationController',
            controllerAs: 'accommodationCtrl',
            data: {
                title: 'Accommodation',
                description: "Here you can find recommended accomodation for a pleasant stay in the city of Thessaloniki.",
            }
        })

        .state('sponsors', {
            url: '/sponsors',
            templateUrl: 'components/sponsors/tpl/sponsors.html',
            controller: 'sponsorsController',
            controllerAs: 'sponsorsCtrl',
            data: {
                title: 'Sponsors',
                description: "Find out the sponsors of this event - we are thankful to all of them!",
            }
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'components/contact/tpl/contact.html',
            controller: 'contactController',
            controllerAs: 'contactCtrl',
            data: {
                title: 'Contact',
                description: "Have a question or suggestion? Find out the contact form and we'll try to get back to you as soon as possible.",
            }
        })

        .state('location', {
            url: '/location',
            templateUrl: 'components/location/tpl/location.html',
            controller: 'locationController',
            controllerAs: 'locationCtrl',
            data: {
                title: 'Location',
                description: "Check out the location of the 1st Thessaloniki Street Food Festival, and the various means of transport to reach it. Google maps included.",
            }
        })

        .state('application', {
            url: '/application',
            templateUrl: 'components/application/tpl/application.html',
            controller: 'applicationController',
            controllerAs: 'applicationCtrl',
            data: {
                title: 'Application',
                description: "Fill out the following application form in order to participate in this event!",
            }
        });


    /*Theming*/
    $mdThemingProvider.definePalette('tsafou', {
        '50': 'ed8a29',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'f44336',
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': '3470b7',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'ffffff',
        'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                            // on this palette should be dark or light

        'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
            '200', '300', '400', 'A100'],
        'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('amber')
        .accentPalette('red')
        .backgroundPalette('grey');

    $mdThemingProvider.theme('tabs')
        .primaryPalette('tsafou', {'default': 'A100'})
        .accentPalette('tsafou',
            {'default': '50'}) //amber
        .backgroundPalette('grey', {
            'default': '50'
        });

    $mdThemingProvider.theme('footer')
        .primaryPalette('blue')
        .accentPalette('red')
        .backgroundPalette('grey', {
            'default': '900'
        }).dark();
    // .dark();

    //TRANSLATION START
    $translateProvider.translations('en', {
        ABOUT: 'About',
        APPLICATION: 'Application',
        LOCATION: 'Location',
        ACCOMMODATION: 'accommodation',
        CONTACT: 'Contact',
        SPONSORS: 'Sponsors',
        LOCATION_HEADER: 'Location',
        BUS_HEADER: 'Bus Stops',
        BUS_TEXT1A: 'Leof. Vas. Georgiou (going West/Center)',
        BUS_TEXT1B: 'Stop: Dimarxiako Megaro',
        BUS_TEXT1C: 'Lines: 3, 5, 6, 33, 39, 78',
        BUS_TEXT2A: 'Leof. Meg. Alexandrou (going East)',
        BUS_TEXT2B: 'Stop: Dimarxiako Megaro',
        BUS_TEXT2C: 'Lines: 5, 6, 8, 33, 78',
        BUS_TEXT3A: 'Leof.Stratou (going East/West)',
        BUS_TEXT3B: 'Stop: Stratigio',
        BUS_TEXT3C: 'Lines: 3, 7, 10, 11, 12, 31, 39',
        BUS_TEXT4A: '3is Septemvriou (Going East/West)',
        BUS_TEXT4B: 'Stop: Mouseiou Vyzantinou Politismou',
        BUS_TEXT4C: 'Lines: 3, 8',
        FOOTER_COL1_HEADER: 'Contact us',
        FOOTER_COL2_HEADER: 'Find us',
        FOOTER_COL1_PHONE:'Phone: +30 ',
        accommodation_HEADER: 'accommodation',
        CITYHALL_TEXT1A: 'Thessaloniki City Hall',
        CITYHALL_TEXT1B: 'Leoforos Vasileos Georgiou 1',
        CITYHALL_TEXT1C: 'Thessaloniki 546 40',
        CITYHALL_TEXT1D: '231 331 7777',
        CONTACT_HEADER: 'Contact',
        CONTACT_LABEL_NAME: 'Your name',
        CONTACT_LABEL_NAME_ERROR: '* You forgot to fill in your name!',
        CONTACT_EMAIL: 'Your email',
        CONTACT_EMAIL_ERROR1: '* You \'ve probably made a mistake in your email address!',
        CONTACT_EMAIL_ERROR2: '* You forgot to fill in your email address!',
        CONTACT_QUESTION: 'Your question',
        CONTACT_QUESTION_ERROR1: '* You probably forgot what you wanted to say!',
        CONTACT_QUESTION_ERROR2: '* The maximum length of the message is 150 characters!',
        CONTACT_SUCCESS: 'Message successfully sent!',
        CONTACT_ERROR: 'An error has occurred. Please try sending your message directly to ',
        CONTACT_SEND: 'SEND',
        CHECK_BACK_SOON: 'Please check back soon...',
        SPONSORS_HEADER_SPONSORED_BY: 'Sponsored By',
        SPONSORS_HEADER_MEDIA_PARTNERS: 'Media Sponsors',
        SPONSORS_HEADER_SUPPORT: 'Under the auspices of',
        SPONSORS_HEADER_CLOTHING: 'Official clothing partner',
        SPONSORS_HEADER_POWERED_BY: 'Powered By',
        ABOUT_HEADER_MAIN: 'About',
        ABOUT_HEADER_TOP: 'Thessaloniki Street Food Festival',
        ABOUT_HEADER_TOP_TEXT: 'The creative team of SoulFood Thessaloniki (Upnloud & Black Radio Berlin) proudly presents the 1st Thessaloniki Street Food Festival! The dates of the Festival are Saturday 29 & Sunday 30 April from 10 a.m. until 10 p.m. and it will take place at the new Town Hall of Thessaloniki, under the auspices of the Municipality of Thessaloniki and, in particular, within the framework of the 7th Thessaloniki Food Festival, which is organised by the Deputy Mayoralty of Culture and International Relations. Entrance is free, which the area, located in the town centre, is easily identifiable and accessible (public transport, car, motorbike, bike or on foot) for the general public.',
        ABOUT_HEADER_WHAT: 'What is Thessaloniki Street Food Festival?',
        ABOUT_HEADER_WHAT_TEXT: 'Our objective is to create a two-day celebration, open to everyone! Through flavours, we want to search for and present the common identity, but also meet something foreign, and explore new flavours. A “tasteful” village will be established for 2 days, with different cuisines and music from our city’s DJs.',
        ABOUT_HEADER_DESC: 'Description of the 1st Thessaloniki Street Food Festival',
        ABOUT_HEADER_DESC_TEXT1: 'The idea for the creation of the 1st Thessaloniki Street Food Festival was born through our travels, our love for food, and the history of Thessaloniki, of course. As residents in many cities of various countries around the world (Germany, United Kingdom, Spain, Poland, Holland, etc.), we had the chance to visit, eat, and work in similar Street Food Festivals. In our minds, gastronomic quest is inextricably linked to each and every trip. Extraordinary flavours, old and new recipes, unknown combinations and ingredients.',
        ABOUT_HEADER_DESC_TEXT2: ' The history of Thessaloniki attracts us and shows us the right direction. A city that is characterised a “crossroad of people”, which used to be a cradle of multiculturalism, and has maintained its “flavours” until now. Spices, aromas, raw materials and recipes from all around the world. From India to America, from European sweets to Asian sushi.',
    })
        .translations('gr', {
            ABOUT: 'Σχετικα',
            APPLICATION: 'Αιτηση Συμμετοχης',
            LOCATION: 'Τοποθεσια',
            ACCOMMODATION: 'Διαμονη',
            CONTACT: 'Επικοινωνια',
            SPONSORS: 'Χορηγοι',
            LOCATION_HEADER: 'Τοποθεσία',
            BUS_HEADER: 'Στάσεις Λεωφορείων',
            BUS_TEXT1A: 'Λεωφ. Βασ. Γεωργίου (προς Δυτικά/Κέντρο)',
            BUS_TEXT1B: 'Σταση: Δημαρχιακό Μέγαρο',
            BUS_TEXT1C: 'Γραμμές: 3, 5, 6, 33, 39, 78',
            BUS_TEXT2A: 'Λεωφ. Μεγ. Αλεξάνδρου (προς Ανατολικά)',
            BUS_TEXT2B: 'Στάση: Δημαρχιακό Μέγαρο',
            BUS_TEXT2C: 'Γραμμές: 5, 6, 8, 33, 78',
            BUS_TEXT3A: 'Λεωφ.Στρατού (προς Ανατολικά/Δυτικά)',
            BUS_TEXT3B: 'Στάση: Στρατηγείο',
            BUS_TEXT3C: 'Γραμμές: 3, 7, 10, 11, 12, 31, 39',
            BUS_TEXT4A: '3ης Σεπτεμβρίου (Προς Δυτικά/Ανατολικά)',
            BUS_TEXT4B: 'Στάση: Μουσείου Βυζαντινού Πολιτισμού',
            BUS_TEXT4C: 'Γραμμές: 3, 8',
            FOOTER_COL1_HEADER: 'Επικοινωνία',
            FOOTER_COL2_HEADER: 'Βρείτε μας',
            FOOTER_COL1_PHONE:'Τηλέφωνο: +30 6944 556677',
            accommodation_HEADER: 'Διαμονή',
            CITYHALL_TEXT1A: 'Δημαρχείο Θεσσαλονίκης',
            CITYHALL_TEXT1B: 'Λεωφόρος Βασιλέως Γεωργίου 1',
            CITYHALL_TEXT1C: 'Θεσσαλονίκη 546 40',
            CITYHALL_TEXT1D: '231 331 7777',
            CONTACT_HEADER: 'Επικοινωνια',
            CONTACT_LABEL_NAME: 'Το όνομά σου',
            CONTACT_LABEL_NAME_ERROR: '* Ξέχασες να συμπληρώσεις το όνομά σου!',
            CONTACT_EMAIL: 'Το email σου',
            CONTACT_EMAIL_ERROR1: '* Μάλλον έχεις κάνει κάποιο λάθος στην ηλεκτρονική σου διεύθυνση!',
            CONTACT_EMAIL_ERROR2: '* Ξέχασες να συμπληρώσεις την ηλεκτρονική σου διεύθυνση!',
            CONTACT_QUESTION: 'Η ερώτησή σου',
            CONTACT_QUESTION_ERROR1: '* Μάλλον ξέχασες τι θέλεις να μας πεις!',
            CONTACT_QUESTION_ERROR2: '* Το μέγιστο μήκος του μηνύματος είναι 150 χαρακτήρες!',
            CONTACT_SUCCESS: 'Το μήνυμά σου έφυγε επιτυχώς!',
            CONTACT_ERROR: 'Παρουσιάστηκε κάποιο σφάλμα. Δοκίμασε να στείλεις το μήνυμά σου στο ',
            CONTACT_SEND: 'ΑΠΟΣΤΟΛΗ',
            CHECK_BACK_SOON: 'Σύντομα κοντά σας...',
            SPONSORS_HEADER_SPONSORED_BY: 'Χορηγοί',
            SPONSORS_HEADER_MEDIA_PARTNERS: 'Χορηγοί επικοινωνίας',
            SPONSORS_HEADER_SUPPORT: 'Με την υποστήριξη',
            SPONSORS_HEADER_CLOTHING: 'Επίσημος χορηγός ένδυσης',
            SPONSORS_HEADER_POWERED_BY: 'Με την δύναμη',
            ABOUT_HEADER_MAIN: 'Σχετικά',
            ABOUT_HEADER_TOP: 'Thessaloniki Street Food Festival',
            ABOUT_HEADER_TOP_TEXT: 'Η δημιουργική ομάδα του SoulFood Thessaloniki (Upnloud & Black Radio Berlin) παρουσιάζει το 1st Thessaloniki Street Food Festival το Σάββατο 29 & Κυριακή 30 Απριλίου, από τις 10 π.μ μέχρι και τις 10 μ.μ., στο νέο Δημαρχείο Θεσσαλονίκης.',
            ABOUT_HEADER_WHAT: 'Τί είναι το Thessaloniki Street Food Festival?',
            ABOUT_HEADER_WHAT_TEXT: 'Δημιουργούμε μια διήμερη γιορτή, ανοιχτή σε όλους! Μέσα από τις γεύσεις θέλουμε να αναζητήσουμε και να παρουσιάσουμε την κοινή γευστική ταυτότητα, να γνωρίσουμε το διαφορετικό και το ξένο, οι ουρανίσκοι μας να εξερευνήσουν νέες γεύσεις. Για 2 μέρες θα ζωντανέψει ένα «γευστικό» χωριό με διαφορετικές κουζίνες, αγορά με προϊόντα απ’ όλο το κόσμο, μουσική από DJs της πόλης, workshops για μικρά αλλά και μεγάλα παιδιά!',
            ABOUT_HEADER_DESC: 'Περιγραφή 1st Thessaloniki Street Food Festival',
            ABOUT_HEADER_DESC_TEXT1: 'Η ιδέα της δημιουργίας του 1st Thessaloniki Street Food Festival γεννήθηκε μέσα από τα ταξίδια μας, την αγάπη μας για το φαγητό και φυσικά την ιστορία της Θεσσαλονίκης. Έχοντας ζήσει ο καθένας μας σε διάφορες πόλεις ανά τον κόσμο είχαμε την ευκαιρία να επισκεφτούμε, να γευτούμε & να δουλέψουμε σε αντίστοιχα Street Food Festivals. Μέσα στο μυαλό μας η γαστρονομική αναζήτηση είναι άρρηκτα συνδεδεμένη με κάθε μας ταξίδι. Παράξενες γεύσεις, παλιές & νέες συνταγές, άγνωστοι συνδυασμοί και υλικά.',
            ABOUT_HEADER_DESC_TEXT2: 'Η ιστορία της Θεσσαλονίκης μας ελκύει και μας δείχνει τη σωστή κατεύθυνση. Μια πόλη “σταυροδόμι των λαών”, η οποία τα παλιότερα χρόνια υπήρξε κοιτίδα πολυπολιτισμικότητας , που σήμερα την έχει διατηρήσει στις “γεύσεις” της. Μπαχάρια, αρώματα, πρώτες ύλες και συνταγές απ’ όλο τον κόσμο. Από τις Ινδίες μέχρι την Αμερική, από τα Ευρωπαϊκά γλυκά μέχρι τα σούσι της Ασίας.',

        });

    $translateProvider.preferredLanguage('en');
    //TRANSLATION END

    // Google Maps
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBJlIUu2xoZT8DO3qsVsZFT9NZNeslH3JY',
        v: '3', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}])
    .run(['$rootScope', '$document', '$timeout', '$state', function ($rootScope, $document, $timeout, $state) {
        $rootScope.$on('$stateChangeSuccess', function() {
            $rootScope.title = $state.current.data.title;
            $rootScope.description = $state.current.data.description;
        });

        // Get the start time in order for the loader to stay on for a standard amount of time - close it in mainCtrl
        $rootScope.startTime = new Date();

        $rootScope.loading_screen = pleaseWait({
            logo: "assets/img/logoSoulTr.png",
            // backgroundColor: 'rgb(0,96,100)',
            loadingHtml: // '<h3 class="loading-message">Please wait, a few bits tried to escape, but we caught them!</h3>'
            '<div class="sk-wave">'
            + '<div class="sk-rect sk-rect1"></div>'
            + '<div class="sk-rect sk-rect2"></div>'
            + '<div class="sk-rect sk-rect3"></div>'
            + '<div class="sk-rect sk-rect4"></div>'
            + '<div class="sk-rect sk-rect5"></div>'
            + '</div>'
            // loadingHtml: "<p class='loading-message'>Loading! Please wait...</p>"
        });

        var diff;

        $document.ready(function () {
            // Find the elapsed difference between the present time and the startTime set in our config
            diff = new Date() - $rootScope.startTime;

            // If 1000ms has elapsed, the loading splash can be hidden
            // else create a timeout to hide the loading splash after 800ms has elapsed since the startTime was set
            if (diff > 1000) {
                $rootScope.loading_screen.finish();
            } else {
                $timeout(function () {
                    $rootScope.loading_screen.finish();
                }, 1000 - diff);
            }
        });

        // for loading between states
        /*  $rootScope.$on('$stateChangeStart', function (event) {
         $rootScope.loading_screen1 = pleaseWait({
         logo: "",
         backgroundColor: '#f46d3b',
         loadingHtml: '<h1 class="loading-message">Flea Market SKG</h1>'
         + '<div class="sk-wave">'
         + '<div class="sk-rect sk-rect1"></div>'
         + '<div class="sk-rect sk-rect2"></div>'
         + '<div class="sk-rect sk-rect3"></div>'
         + '<div class="sk-rect sk-rect4"></div>'
         + '<div class="sk-rect sk-rect5"></div>'
         + '</div>'
         // loadingHtml: "<p class='loading-message'>Loading! Please wait...</p>"
         });
         });
         $rootScope.$on('$stateChangeSuccess', function (event) {
         diff = new Date() - $rootScope.startTime;
         if (diff > 4000) {
         $rootScope.loading_screen1.finish();
         } else {
         $timeout(function () {
         $rootScope.loading_screen1.finish();
         }, 4000 - diff);
         }
         console.log('state change end');
         });
         */

    }]);