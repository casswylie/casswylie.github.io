/*var date = new Date().getDay();
document.getElementById("currentDate").innerHTML = date;
*/


var today= new Date(); 
var date = today.getDay() +', ' + today.getDate() + ' ' + today.getMonth() + ' ' + today.getFullYear();
document.getElementById("currentDate").innerHTML = today;