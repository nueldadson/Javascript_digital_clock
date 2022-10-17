
        var  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
        switch(new Date().getDay()){
            case 0:
            document.getElementById('date').innerHTML= `Sunday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 1:
            document.getElementById('date').innerHTML= `Monday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 2:
            document.getElementById('date').innerHTML= `Tuesday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 3:
            document.getElementById('date').innerHTML= `Wednesday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 4:
            document.getElementById('date').innerHTML= `Thursday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 5:
            document.getElementById('date').innerHTML= `Friday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
            case 6:
            document.getElementById('date').innerHTML= `Sarturday ${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
            break;
        }
        
        function showTime(){
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s =  date.getSeconds();
            let session = "AM";
            let day = date.getDay();

            if ( h == 0){
                h = 12;
            }
            if ( h > 12 ){
                h = h - 12;
                session = "PM";
            }

            h = ( h < 10 ) ? "0" + h : h;
            m = ( m < 10 ) ? "0" + m : m;
            s = ( s < 10 ) ? "0" + s : s;

            let time = h + " : " + m + " : " + s + " " + session;
            document.getElementById("clockDisplay").innerHTML= time;
            document.getElementById("clockDisplay").textContent= time;

            setTimeout(showTime, 1000);
        }
        showTime();
    