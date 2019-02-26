
function getMyDate() {
    var date = new Date();
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
                    "Thursday", "Friday", "Saturday"];
    var day = dayNames[date.getDay()];
    var dateNum = date.getDate();
    var month = monthNames[date.getMonth()];
    var year = date.getFullYear();
  
    return day + ', ' + dateNum + ' ' + month + ' ' + year;
  }


document.getElementById("currentDate").innerHTML = getMyDate();