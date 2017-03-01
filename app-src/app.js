'use strict';

// Declare app level module which depends on views, and components
angular.module('fleaMarket', [
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
    'pascalprecht.translate'
]).config(['$locationProvider', '$urlRouterProvider', '$stateProvider', '$mdThemingProvider', 'cfpLoadingBarProvider', '$translateProvider', function ($locationProvider, $urlRouterProvider, $stateProvider, $mdThemingProvider, cfpLoadingBarProvider, $translateProvider) {
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
                controllerAs: 'aboutCtrl'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'components/contact/tpl/contact.html',
                controller: 'contactController',
                controllerAs: 'contactCtrl'
            })

            .state('application', {
                url: '/application',
                templateUrl: 'components/application/tpl/application.html',
                controller: 'applicationController',
                controllerAs: 'applicationCtrl'
            })

            .state('info', {
                url: '/info',
                templateUrl: 'components/info/tpl/info.html',
                controller: 'infoController',
                controllerAs: 'infoCtrl'
            })
            .state('info.merchants', {
                url: '/merchants',
                templateUrl: 'components/info/tpl/merchants.html'
            })
            .state('info.visitors', {
                url: '/visitors',
                templateUrl: 'components/info/tpl/visitors.html'
            })
            .state('stef', {
                url: '/stef',
                templateUrl: 'components/stef/tpl/stef.html',
                controller: 'stefController',
                controllerAs: 'stefCtrl'
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
            .primaryPalette('grey',
                {'default': '50'})
            .accentPalette('tsafou',
                {'default': '50'}) //amber
            .backgroundPalette('grey', {
                'default': '50'
            });
        $mdThemingProvider.theme('tabs')
            .primaryPalette('tsafou', {'default': 'A100'})
            .accentPalette('tsafou',
                {'default': '50'}) //amber
            .backgroundPalette('grey', {
                'default': '50'
            });
        // .dark();

        //TRANSLATION START
        $translateProvider.translations('en', {
                TITLE: 'About',
                MESSAGE: 'This app supports your language!'
            })
            .translations('gr', {
                TITLE: 'Σχετικα',
                MESSAGE: 'Denna app stöder ditt språk!'
            });

        $translateProvider.preferredLanguage('en');
        //TRANSLATION END
    }])
    .run(['$rootScope', '$document', '$timeout', function ($rootScope, $document, $timeout) {
        // Get the start time in order for the loader to stay on for a standard amount of time - close it in mainCtrl
        $rootScope.startTime = new Date();

        $rootScope.loading_screen = pleaseWait({
            logo: "assets/img/fleaMarketLogoTrans.png",
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

            // If 1500ms has elapsed, the loading splash can be hidden
            // else create a timeout to hide the loading splash after 800ms has elapsed since the startTime was set
            if (diff > 4000) {
                $rootScope.loading_screen.finish();
            } else {
                $timeout(function () {
                    $rootScope.loading_screen.finish();
                }, 4000 - diff);
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