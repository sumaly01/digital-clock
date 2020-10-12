function updateClock(){
    var now=new Date()
    var dname=now.getDay(),
        mon=now.getMonth(),
        dnum=now.getDate(),
        yr=now.getFullYear(),
        hr=now.getHours(),
        min=now.getMinutes(),
        sec=now.getSeconds(),
        prd="AM"

        if(hr==0){
            hr=12
        }

        if(hr>=12){
            if(hr>12)
                hr=hr-12
                    
            prd="PM"
        }

//for the number of digits to be displayed
    Number.prototype.pad = function(digits){
        for(var n= this.toString();n.length< digits;n=0+n);
        return n;
    }

    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var ids=["dayname","month","daynum","year","hour","minutes","seconds","period"]
    var values=[days[dname], months[mon],dnum.pad(2),yr,hr.pad(2),min.pad(2),sec.pad(2),prd]

    for (i=0;i<ids.length;i++)
    document.getElementById(ids[i]).innerHTML = values[i]
}   
    

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1);
}
  