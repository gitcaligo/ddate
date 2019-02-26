// initial calSetting
var calSetting = 'ddate'

var date = {

    // returns regular date string
    getStrDate : function() {

        var now = new Date();

        var week = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

        var strDay = week[now.getDay()];

        var year = ['Januar', 'Februar', 'März', 'April', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];

        var strMonth = year[now.getMonth()];

        var strDate = strDay + ' ' + now.getDate() + '. ' + strMonth + ' ' + now.getFullYear();

        return strDate;

    },

    // returns discordian date string
    getStrDdate : function() {

        var now = new Date();        

        // calculates day of year
        var start = new Date(now.getFullYear(), 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var dayOfYear = Math.floor(diff / oneDay);

        // calculates name of weekday
        var dWeek = ['Sweetmorn', 'Boomtime', 'Pungenday', 'Prickle-Prickle', 'Setting Orange'];

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

        // calculates name & day of season
        var dYear = ['Chaos', 'Discord', 'Confusion', 'Bureaucracy', 'The Aftermath'];

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

        // checks for leap year & sets ddate string
        var strDdate = now.getDate() == 29 && now.getMonth() == 1 && now.getFullYear() % 100 !== 0 ? "St. Tib's Day " + (now.getFullYear() + 1166) + ' YOLD' : dWeekday + ' ' + dDay + '. ' + dSeason + ' ' + (now.getFullYear() + 1166) + ' YOLD';

        return strDdate;

    }

};

// writes to date according to calSetting
function writeToCal() {

    calSetting == 'ddate' ? document.getElementById('date').innerHTML = date.getStrDdate() : document.getElementById('date').innerHTML = date.getStrDate();

};

// switches calSetting & immediately writes to calendar
function changeCalSetting() {

    calSetting = calSetting == 'ddate' ? calSetting = 'normal' : calSetting = 'ddate';

    writeToCal();

}

// inital call of function
writeToCal();

// update every 1 second
setInterval(writeToCal, 1000);

// event listener for date
document.getElementById('date').addEventListener('click', changeCalSetting);

