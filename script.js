var hr=0;
var min=0;
var sec=0;
var nano=0;
var timer=false;

function start(){
    timer=true;
    stopwatch();

}
function stop(){
    timer=false;
}
function reset(){
    timer=false;

    hr=0;
    min=0;
    sec=0;
    nano=0;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("nano").innerHTML="00";
}
function stopwatch(){
    if(timer==true){
        nano=nano+1;

        if(nano==100){
            sec=sec+1;
            nano=0;
        }
        if(sec==60){
            min=min+1;
            sec=0;
        }
        if (min==60) {
            hr=hr+1;
            min=0;
            sec=0;
        }
        
        document.getElementById("hr").innerHTML=hr;
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("nano").innerHTML=nano;

        setTimeout("stopwatch()",10);
    }

}