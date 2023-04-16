let red=document.getElementById("inred");

let green=document.getElementById("greenbay");

let blue=document.getElementById("blue2");

let submit=document.getElementById("submit");

submit.onclick= function  (){
    let rgb = "rgba(" + red.value + " , " + green.value + " , " + blue.value +" )";
    submit.style.backgroundColor = rgb;
}