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
        return;
    }

    if (dt.indexOf("/") == -1) {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        return;
    }

    var year = dt.substring(dt.length - 4);
    if (isNaN(year)) {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        return;
    }

    // converts the event date string into a date object
    var date = new Date(dt);
    if (date == "Invalid Date") {
        msg.nodeValue = "Please enter the date in MM/DD/YYYY format.";
        return;
    }

    // calculate days 
    var today = new Date();
    var oneDay = 24*60*60*1000; // hours*min*seconds*ms
    var days = (date.getTime() - today.getTime()) / oneDay;
    days = Math.ceil(days);
    
    if (days == 0) {
        msg.nodeValue = "Hooray! Today is ".concat(event.toLowerCase(),
        "!\n(", date.toDateString(), ")");
    }

    if (days < 0) {
        event = event.substring(0,1).toUpperCase() + event.substring(1);
        msg.nodeValue = event.concat(" happened ", Math.abs(days),
        " day(s) ago. \n (", date.toDateString(), ")");
    }

    if (days > 0) {
        msg.nodeValue = days.toString().concat(" day(s) until ",
        event.toLowerCase(), "!\n(", date.toDateString(), ")");
    }
};



window.onload = function () {
    $("countdown").onclick = calculateDays;
    $("event").focus();
};