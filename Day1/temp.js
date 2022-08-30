choice = prompt("1.Day and Time \n 2.String Rotation \n 3.Days left until next Christmas \n 4.Capitalize the first letter of each word\n ")
// choice = prompt("Enter choice :") 
if(choice<=5 && choice>=1) {
switch(choice) {
    case "1" :
        var opt = prompt("Enter format : (12/24)")  
        if(opt==12 || opt==24)
            dateTime(opt);
        else
            alert("Enter format correctly!")
        break;
    case "2":
        strRotation()
        break;
    case "3":
        Christmas()
        break;                                                                                                                                                                                                                                                        
    case "4":
        capitalize();
        break;
    default:
        break;
}
}
else
    alert("Invalid choice!")


function dateTime(format = 12) {
    document.write("current day | current time =>");
    var d = new Date();
    days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    day = days[d.getDay()]
    hr = "PM"
    h = d.getHours()
    if(h<12)
        hr = "AM"
    if(format == 12)
    {
        h = h%12;
    }
    document.write(day + " | " + ("0" + h).slice(-2) + " " + hr + " :" + ("0" + d.getMinutes()).slice(-2) + " :" + ("0" + d.getSeconds()).slice(-2))
    document.write("<br>")
}


function strRotation()
{
    str = prompt("Enter string")
    len = str.length
    val = str
    function period()
    {
        newstr = str[len-1] + str.substring(0,len-1)
        document.write(newstr + "<br>")
        str = newstr
        if(val === str)
            clearInterval(id)
    }
    const id = setInterval(period,1000)
}


function Christmas()
{
    var d = new Date()
    var days = [31,28,31,30,31,30,31,31,30,31,30,31]
    var m = d.getMonth()
    var da = d.getDate()
    var yr = d.getFullYear()
        daysleft = 0
        daysleft += (days[m-1] - da)
        for(i = m+1 ; i<11;i++)
        {
            daysleft += days[i]
        }
        if(m<=2 && yr%4==0)
        {
            daysleft+1;
        }
        if(m==12 && da>25)
        {
            daysleft+=1
            if((yr+1)%4 == 0)
                daysleft+=1
        }
        if(m!=12)
            daysleft += 25
    document.write("Days left : " + daysleft)
}


function capitalize()
{
    let str = prompt("Enter string : ")
    let cap =""
    cap+= str.charAt(0).toUpperCase()
    len = str.length
    for(i=1;i<len-1;i++)
    {
        if(str[i]===" " || str[i]==="." || str[i]==="!" || str[i]==="," || str[i]==="?")
        {
            
            cap+=str[i]
            cap += str.charAt(i+1).toUpperCase()
            i++
        }
        else
            cap+=str[i]
    }
    document.write("After capitalizing first letter of each word : " + cap)
}