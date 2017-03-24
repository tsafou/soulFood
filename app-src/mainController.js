/**
 * Created by Tsafou on 07/07/2016.
 */
"use strict";

angular.module('soulFood').controller('mainController', mainController);

mainController.$inject = ['$scope', '$mdSidenav', '$state', '$mdMedia', '$mdDialog', '$translate'];

function mainController($scope, $mdSidenav, $state, $mdMedia, $mdDialog, $translate) {
    var vm = this;
    $scope.$mdMedia = $mdMedia;

    var originatorEv;
    var faq;
    $scope.state = $state;
    vm.selectedLang = 'en';
    vm.states = [
        {
            name: 'application'
        },
        {
            name: 'location'
        },
        {
            name: 'accommodation'
        },
        {
            name: 'sponsors'
        },
        {
            name: 'contact'
        },
        {
            name: 'about'
        },
    ];
    vm.menuItems = [
        // {
        //     "name": "Aρχικη",
        //     "state": "home"
        // },
        {
            "name": "Σχετικα",
            "state": "about"
        },
        {
            "name": "Συμμετοχη",
            "state": "application"
        },
        {
            "name": "Εκθετες",
            "state": "info.merchants"
        },
        {
            "name": "Επισκεπτες",
            "state": "info.visitors"
        },
        {
            "name": "Επικοινωνια",
            "state": "contact"
        }
    ];

    vm.openSidebar = function () {
        vm.sidenavIsOpen = true;
        $mdSidenav('left').open();

    };
    vm.closeSidebar = function () {
        vm.sidenavIsOpen = false;
        $mdSidenav('left').close();
    };

    vm.goToState = function (state) {
        $state.go(state);
    };

    vm.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    vm.showFaq = function () {
        alert = $mdDialog.alert({
            title: 'Συχνες Ερωτησεις',
            // textContent: faq[0].question,
            // htmlContent: '<div>Test</div>',
            templateUrl: 'components/var/faq.html',
            clickOutsideToClose: true,
            controller: ['$scope', '$mdDialog', function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }]
        });
        $mdDialog.show(alert);
    };

    vm.showBasicInfo = function () {
        alert = $mdDialog.alert({
            title: 'Πληροφορίες συμμετοχής',
            templateUrl: 'components/var/participationInfo.html',
            clickOutsideToClose: true,
            controller: ['$scope', '$mdDialog', function DialogController($scope, $mdDialog) {
                $scope.closeDialog = function () {
                    $mdDialog.hide();
                }
            }]
        });
        $mdDialog.show(alert);
    };


    //TRANSLATION START
    vm.updateLanguage = function(language) {
        vm.selectedLang = language;
        $translate.use(vm.selectedLang);
    };

    //TRANSLATION END
}