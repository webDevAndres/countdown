"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

var calculateDays = function () {
    var event = $("event").value;
    var dt = $("date").value;
    var msg = $("message").firstChild;

    if (event.length == 0 || dt.length == 0) {
        msg.nodeValue = "Please enter both a name and a date";
        // return;
    }

    if (dt.indexOf("/") == -1) {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        // return;
    }

    var year = dt.substring(dt.length - 3);
    if (isNaN(year)) {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        // return;
    }

    // converts the event date string into a date object
    var date = new Date(dt);
    if (date == "Invalid Date") {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        // return;
    }

    // calculate days 
    
};



window.onload = function () {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};