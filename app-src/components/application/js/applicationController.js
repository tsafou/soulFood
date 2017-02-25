/**
 * Created by Tsafou on 25/08/2016.
 */

angular.module('fleaMarket').controller('applicationController', applicationController);

applicationController.$inject = ['$scope'];

function applicationController($scope) {
    var vm = this;

    function showApplication() {
        var qs, js, q, s, d = document, gi = d.getElementById, ce = d.createElement, gt = d.getElementsByTagName, id = 'typef_orm', b = 'https://s3-eu-west-1.amazonaws.com/share.typeform.com/';
        if (!gi.call(d, id)) {
            js = ce.call(d, 'script');
            js.id = id;
            js.src = b + 'widget.js';
            q = gt.call(d, 'script')[0];
            q.parentNode.insertBefore(js, q)
        }
    }

    showApplication();


    // var typeformElem = angular.element(document.getElementById('typeform'));
    // typeformElem.attr("src", "https://fleamarketskg.typeform.com/to/BpticS");
    // console.log(typeformElem);

}