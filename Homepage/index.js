function updateClock() {
    var currentTime = new Date();
    var currentHoursAP = currentTime.getHours();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // transform clock to 12h version if needed
    currentHoursAP = (currentHours > 12) ? currentHours - 12 : currentHours;
    // transform clock to 12h version after mid night
    currentHoursAP = (currentHoursAP == 0) ? 12 : currentHoursAP;
    // display first 24h clock and after line break 12h version
    var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
    // print clock js in div #clock.
    $(".time").html(currentTimeString);}
    $(document).ready(function () {
    setInterval(updateClock, 500);
});