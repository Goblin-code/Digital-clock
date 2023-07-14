
function showTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    // var miliseconds = dateTime.getMilliseconds();
    var todayDate = dateTime.getDate();
    var month = dateTime.getMonth();
    month++;
    var year = dateTime.getFullYear();
    var session = "AM";
    var dayOfWeek = dateTime.getDay();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = weekDays[dayOfWeek];


    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }

    hours = (hours < 10) ? "0"+hours : hours;
    minutes = (minutes < 10) ? "0"+minutes : minutes;
    seconds = (seconds < 10) ? "0"+seconds : seconds;

    var displayTime = document.getElementById("displayTime");
    var displayDate = document.getElementById("displayDate");
    var day = document.getElementById("Day");
    // var mSeconds = document.getElementById("displaymiliseconds");


    displayTime.innerHTML = hours + " : " + minutes + " : " + seconds + " " + session;

    // mSeconds.innerHTML = miliseconds;

    displayDate.innerHTML =todayDate + "/" + month + "/" +year;

    day.innerHTML = currentDay;
}

setInterval(showTime, 1000);