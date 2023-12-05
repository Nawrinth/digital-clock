
function timesnow(){
    let datetime = new Date()
    let hr = datetime.getHours()
    let min = lessten(datetime.getMinutes())
    let sec = lessten(datetime.getSeconds())
    if (hr>12)
    {
        hr -=12
        document.getElementById('hours').innerHTML = lessten(hr)
        document.getElementById('ampm').innerHTML = 'PM'

    }
    else{
        document.getElementById('hours').innerHTML = hr
        document.getElementById('ampm').innerHTML = 'AM'

    }
    document.getElementById('minutes').innerHTML = min
    document.getElementById('seconds').innerHTML = sec
}

function lessten(num)
{
    return num<10?"0"+num:num
}

setInterval(timesnow,500)