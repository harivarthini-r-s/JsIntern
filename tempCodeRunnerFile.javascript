function dateTime(format)
{
    var today = new Date();
    var days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    console.log("Current day | Current time =>")
    var day = today.getDay
    var hour = today.getHours
    var min = today.getMinutes
    var sec = today.getSeconds
    console.log(day + " | "+ hour + " " + min + " " + sec);
}

dateTime(12);