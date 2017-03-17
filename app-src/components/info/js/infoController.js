/**
 * Created by Tsafou on 07/07/2016.
 */

angular.module('soulFood')
    .directive('updateFilling', updateFilling)
    .controller('infoController', infoController);

updateFilling.$inject = ['$timeout'];

function updateFilling($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            if (scope.$index == 0) {
                $timeout(function () {
                    var filling = document.getElementById('filling');
                    updateFilling(element[0], filling, element[0].offsetParent.offsetWidth);
                });

            }

            element.bind('click', function (e) {
                // var thisElem = angular.element(e.target)[0];
                var filling = document.getElementById('filling');
                updateFilling(element[0], filling, element[0].offsetParent.offsetWidth);
            });

            function updateFilling(element, filling, totWidth) {
                //change .filling-line length according to the selected event
                var style = window.getComputedStyle(element, null);
                var eventLeft = style.getPropertyValue("left");
                var eventWidth = style.getPropertyValue("width");
                eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
                var scaleValue = eventLeft / totWidth;
                // console.log(eventLeft);
                setTransformValue(filling, 'scaleX', scaleValue);
            }

            function setTransformValue(element, property, value) {
                element.style["-webkit-transform"] = property + "(" + value + ")";
                element.style["-moz-transform"] = property + "(" + value + ")";
                element.style["-ms-transform"] = property + "(" + value + ")";
                element.style["-o-transform"] = property + "(" + value + ")";
                element.style["transform"] = property + "(" + value + ")";
            }

        }
    }
}


infoController.$inject = ['$scope', '$mdSidenav', '$state', '$mdMedia', 'Lightbox', '$mdDialog'];

function infoController($scope, $mdSidenav, $state, $mdMedia, Lightbox, $mdDialog) {
    var vm = this;
    $scope.selected = [];

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    vm.selectedEvent = 0;

    vm.goTo = function (index) {
        // updateFilling();
        vm.selectedEvent = index;
    };

    vm.events = [
        {
            name: 'Start',
            date: '01/09/2016',
            desc: 'First event - opening',
            img: 'assets/img/clothes.jpg',
            left: '20%'

        },
        {
            name: 'Blah',
            date: '02/09/2016',
            desc: 'Something else',
            img: 'assets/img/records.jpg',
            left: '40%'

        },
        {
            name: 'Mid',
            date: '03/09/2016',
            desc: 'Good',
            img: 'assets/img/milos1.jpg',
            left: '60%'

        },
        {
            name: 'End',
            date: '04/09/2016',
            desc: 'End of fleamarket - music',
            img: 'assets/img/records.jpg',
            left: '80%'

        }
    ];

    vm.merchants = [
        {
            zone: 'Κανονικός Πάγκος',
            dimensions: '1,25 * 0,60',
            price: 100
        },
        {
            zone: 'Προνομιακός Πάγκος',
            dimensions: '1,80 * 0,76',
            price: 130
        },
        {
            zone: '2 Κανονικοί Πάγκοι Ενωμένοι',
            dimensions: '2,50 * 0,60',
            price: 180
        }
    ];

    vm.gallery = [
        {
            title: 'klmk;m',
            url: 'assets/img/gallery/1.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/2.jpg'
        },
        {
            title: 'rddf',
            url: 'assets/img/gallery/3.jpg'
        },
        {
            title: 'jhfdg',
            url: 'assets/img/gallery/4.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/5.jpeg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/6.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/7.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/8.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/9.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/10.jpg'
        },
        {
            title: 'kmlkmn',
            url: 'assets/img/gallery/11.jpg'
        }
    ];


    vm.dj = [
        {
            time: '10πμ-12μμ',
            sat: 'Μιχάλης Αποστόλου',
            sun: 'Δημήτρης Τσουκαλάς'
        },
        {
            time: '12μμ-2μμ',
            sat: 'Jay R',
            sun: 'Chris Ex'
        },
        {
            time: '2μμ-4μμ',
            sat: 'Lefteris Kordiaos',
            sun: 'Ninja'
        },
        {
            time: '4μμ-6μμ',
            sat: 'Elice',
            sun: 'Thomas Numan'
        },
        {
            time: '6μμ-8μμ',
            sat: 'Beater',
            sun: 'Dj Wena'
        },
        {
            time: '8μμ-10μμ',
            sat: 'Beater',
            sun: 'Soul Vibrations aka Demi Starr'
        }
    ];


    vm.schedule = [
        {

            sat: {
                time: '10πμ-12μμ',
                title: 'Τι κάνουν τα ρομπότ της Robotixlab στο Flea Market?',
                desc: 'Τι κάνουν τα ρομπότ της Robotixlab στο Flea Market?',
                id: 'Robotixlab'
            },
            sun: {
                time: '10πμ-12μμ',
                title: 'Τι κάνουν τα ρομπότ της Robotixlab στο Flea Market?',
                desc: 'Τι κάνουν τα ρομπότ της Robotixlab στο Flea Market?',
                id: 'Robotixlab'
            }
        },
        {
            sat: {
                time: '12μμ-1μμ',
                title: '',
                desc: 'Μπισκοτένια στολίδια με ζαχαρόπαστα',
                id: 'Vanilla-Gelateria'
            },
            sun: {
                time: '12μμ-1μμ',
                title: '',
                desc: 'Τα χρώματα των Χριστουγέννων – Διαδραστικό εργαστήριο Τέχνης',
                id: 'Elysian-Xrwmata'
            }
        },
        {
            sat: {
                time: '1μμ-3μμ',
                title: '',
                desc: 'Christmas Upcycling – Χριστουγεννιάτικες κατασκευές από την επαναχρησιμοποίηση υλικών',
                id: 'Kirko'

            },
            sun: {
                time: '1μμ-2μμ',
                title: '',
                desc: 'Αφήγηση Βιβλίου «Κάτω από το Μαξιλάρι», από το συγγραφέα Γ. Γεωργιάδη',
                id: 'Epomenos-Stathmos'
            }
        },
        {
            sat: {
                time: '4μμ-5μμ',
                title: '',
                desc: 'Τα χρώματα των Χριστουγέννων – Διαδραστικό εργαστήριο Τέχνης',
                id: 'Elysian-Xrwmata'
            },
            sun: {
                time: '2μμ-3μμ',
                title: '',
                desc: 'Παράσταση με χειροποίητες κούκλες για τον εκφοβισμό – «Ταξίδι στον Εκφοβυθό», μετά την παράσταση ακολουθεί Διαδραστικό Εργαστήριο «Ταξίδι στον Εκφοβυθό»',
                id: 'Marionetes'
            }
        },
        {
            sat: {
                time: '5μμ-6μμ',
                title: '',
                desc: 'Παράσταση με χειροποίητες κούκλες για τον εκφοβισμό – «Ταξίδι στον Εκφοβυθό», μετά την παράσταση ακολουθεί Διαδραστικό Εργαστήριο «Ταξίδι στον Εκφοβυθό»',
                id: 'Marionetes'
            },
            sun: {
                time: '3μμ-5μμ',
                title: '',
                desc: 'Christmas Upcycling – Χριστουγεννιάτικες κατασκευές από την επαναχρησιμοποίηση υλικών',
                id: 'Kirko'
            }
        },
        {
            sat: {
                time: '6μμ-7μμ',
                title: '',
                desc: 'Το Κουκλοθέατρο των Ονείρων με τη Σαρλότ',
                id: 'Kouklotheatro'
            },
            sun: {
                time: '',
                title: '',
                desc: ''
            }
        }
    ];

    // Show dialog with event info
    $scope.showPrerenderedDialog = function(ev, id) {
        $mdDialog.show({
            controller: DialogController,
            contentElement: '#'+id,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

    vm.activeImageUrl = vm.gallery[0].url;
    vm.setActiveImage = function (index) {
        vm.activeImageUrl = vm.gallery[index].url;
    };

    $scope.openLightboxModal = function (index) {
        Lightbox.openModal(vm.gallery, index);
    };
}
