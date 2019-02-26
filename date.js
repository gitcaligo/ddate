function date() {

    var now = new Date();

    var week = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    var year = ['Januar', 'Februar', 'März', 'April', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

    var strDay = week[now.getDay()];
    var strMonth = year[now.getMonth()];

    var strDate = strDay + ' ' + now.getDate() + '. ' + strMonth + ' ' + now.getFullYear();

    document.getElementById('date').innerHTML = strDate;

}

function dDate() {

    var now = new Date();

    var dWeek = ['Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'];
    var dYear = ['Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath'];

    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);

    if (dayOfYear % 5 == 0) {
        var dWeekday = dWeek[4];
    } else if (dayOfYear == 4 || (dayOfYear + 1) % 5 == 0) {
        var dWeekday = dWeek[3];
    } else if (dayOfYear == 3 || (dayOfYear + 2) % 5 == 0) {
        var dWeekday = dWeek[2];
    } else if (dayOfYear == 2 || (dayOfYear + 3) % 5 == 0) {
        var dWeekday = dWeek[1];
    } else {
        var dWeekday = dWeek[0];
    }

    if (dayOfYear > 292) {
        var dSeason = dYear[4];
        var dDay = dayOfYear - 292;
    } else if (dayOfYear > 219 && dayOfYear <= 292) {
        var dSeason = dYear[3];
        var dDay = dayOfYear - 219;
    } else if (dayOfYear > 146 && dayOfYear <= 219) {
        var dSeason = dYear[2];
        var dDay = dayOfYear - 146;
    } else if (dayOfYear > 73 && dayOfYear <= 146) {
        var dSeason = dYear[1];
        var dDay = dayOfYear - 73;
    } else {
        var dSeason = dYear[0];
        var dDay = dayOfYear;
    }

    var strDate = dWeekday + ' ' + dDay + '. ' + dSeason + ' ' + (now.getFullYear() + 1166) + ' YOLD';

    document.getElementById('date').innerHTML = strDate;

}

document.getElementById('date').addEventListener('click', calSwitch);
var calSetting = 'normal';
function calSwitch() {
    calSetting = calSetting == 'normal' ? calSetting = 'discordian' : calSetting = 'normal';
    calSetting == 'normal' ? date() : dDate();
}

calSetting == 'normal' ? date() : dDate();