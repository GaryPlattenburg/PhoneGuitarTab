﻿$(document).ready(function () {
    window.external.notify("onReady");
});

function toggleLightMode(isNight) {
    var removeClass = "night";
    var addClass = "day";
    if (isNight == "True") {
        addClass = "night";
        removeClass = "day";
    }
    $('body').removeClass(removeClass);
    $('body').addClass(addClass);
}
