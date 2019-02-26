// initial clockSetting
var clockSetting = '24h'

var time = {

    // returns 24h time string
    getTimeString : function() {

        var now = new Date();

        return now.toLocaleTimeString();

    },

    // returns 12h time string
    getSmallTimeString : function() {

        var now = new Date();

        indicator = now.getHours() < 12 ? 'AM' : 'PM';

        if (now.getHours() == 0) {
            var smallHour = 12;
        } else if (now.getHours() > 12) {
            var smallHour = now.getHours() - 12; 
        } else {
            var smallHour = now.getHours();
        }

        var zeroMinutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
        
        var zeroSeconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

        var smallTime = smallHour + ':' + zeroMinutes + ':' + zeroSeconds + ' ' + indicator;

        return smallTime;
        
    }

};

// writes to clock according to clockSetting
function writeToClock() {

    clockSetting == '24h' ? document.getElementById('clock').innerHTML = time.getTimeString() : document.getElementById('clock').innerHTML = time.getSmallTimeString();

};

// switches clockSetting & immediately writes to clock
function changeClockSetting() {

    clockSetting = clockSetting == '24h' ? clockSetting = '12h' : clockSetting = '24h';

    writeToClock();

}

// inital call of function
writeToClock();

// update every 1 second
setInterval(writeToClock, 1000);

// event listener for clock
document.getElementById('clock').addEventListener('click', changeClockSetting);




