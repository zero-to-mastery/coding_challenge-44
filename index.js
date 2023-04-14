
function add() {
    var cal1=0, cla2=0;
    cal1= caf.inna.value;
    cla2=cal1.charAt(cal1.length-1);
   if(cla2=='+' || cla2=='-' || cla2=='/' || cla2=='*') {
    caf.inna.value=cal1.substring(0,cal1.length-1);
    caf.inna.value+='+';
   }else {
    caf.inna.value+='+';
 } 
 } 
 function sub() {
    var cal1=0, cla2=0;
    cal1= caf.inna.value;
    cla2=cal1.charAt(cal1.length-1);
   if(cla2=='+' || cla2=='-' || cla2=='/' || cla2=='*') {
    caf.inna.value=cal1.substring(0,cal1.length-1);
    caf.inna.value+='-';
   }else {
    caf.inna.value+='-';
 } 
 } 
 function di() {
    var cal1=0, cla2=0;
    cal1= caf.inna.value;
    cla2=cal1.charAt(cal1.length-1);
   if(cla2=='+' || cla2=='-' || cla2=='/' || cla2=='*') {
    caf.inna.value=cal1.substring(0,cal1.length-1);
   caf.inna.value+='/';
   }else {
    caf.inna.value+='/';
 } 
 }
 function mul() {
    var cal1=0, cla2=0;
    cal1= caf.inna.value;
    cla2=cal1.charAt(cal1.length-1);
   if(cla2=='+' || cla2=='-' || cla2=='/' || cla2=='*') {
    caf.inna.value=cal1.substring(0,cal1.length-1);
   caf.inna.value+='*';
   }else {
    caf.inna.value+='*';
 } 
 } 
 // enventListner//
const myClick = document.getElementById("myplac")
 myClick.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "purple";

 });
 
     