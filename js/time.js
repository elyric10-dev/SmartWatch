function time_refresher() {
    refresh = 1000;
    setInterval(display_time, refresh);
}

function display_time() {
    time_refresher();
    var date_now = new Date();
    var hours = date_now.getHours();
    var minutes = date_now.getMinutes();
    var seconds = date_now.getSeconds();
    var date = date_now.getDate();
    var days = date_now.getDay();
    var months = date_now.getMonth() + 1;
    var time_indicator;

    var date_c = document.getElementById("date");
    var date_c2 = document.getElementById("date2");
    var date_c3 = document.getElementById("date3");
    var date_c4 = document.getElementById("date4");
    var date_c5 = document.getElementById("date5");
    var date_c6 = document.getElementById("date6");
    var day_c = document.getElementById("day");
    var time_c = document.getElementById("time");
    var time_c2 = document.getElementById("day2");
    var time_c3 = document.getElementById("day3");
    var time_c4 = document.getElementById("day4");
    var time_c5 = document.getElementById("day5");
    var time_c6 = document.getElementById("day6");

    //Time Indicator
    if (hours < 12) time_indicator = 'am';
    else if (hours > 11) time_indicator = 'pm';


    //Month
    for (var i = 1; i <= 9; i++) {
        if (months == i) months = '0' + i;
    }
    //Date
    for (var i = 1; i <= 9; i++) {
        if (date == i) date = '0' + i;
    }
    //Days

    if (days == 0) days = "Sun";
    else if (days == 1) days = "Mon";
    else if (days == 2) days = "Tue";
    else if (days == 3) days = "Wed";
    else if (days == 4) days = "Thu";
    else if (days == 5) days = "Fri";
    else if (days == 6) days = "Sat";


    //Time Format 12hours
    if (hours == 0) hours = 12;
    if (hours >= 13) hours = hours - 12;
    //Time Format
    for (var i = 0; i <= 9; i++) {
        if (hours == i) hours = '0' + i;
        if (minutes == i) minutes = '0' + i;
        if (seconds == i) seconds = '0' + i;
    }


    // Display Months, Date, Day and Time
    date_c.innerHTML = months + "-" + date;
    date_c2.innerHTML = months + "-" + date;
    date_c3.innerHTML = months + "-" + date;
    date_c4.innerHTML = months + "-" + date;
    date_c5.innerHTML = months + "-" + date;
    date_c6.innerHTML = months + "-" + date;
    day_c.innerHTML = days;
    time_c.innerHTML = hours + ":" + minutes + ":" + seconds + " " + time_indicator;
    time_c2.innerHTML = hours + ":" + minutes + ":" + seconds;
    time_c3.innerHTML = hours + ":" + minutes + ":" + seconds;
    time_c4.innerHTML = hours + ":" + minutes + ":" + seconds;
    time_c5.innerHTML = hours + ":" + minutes + ":" + seconds;
    time_c6.innerHTML = hours + ":" + minutes + ":" + seconds;


}
display_time();