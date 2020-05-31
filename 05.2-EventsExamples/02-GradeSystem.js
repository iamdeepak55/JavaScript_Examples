 function calcy() {
     let w = document.getElementById('html').value;
     let m = document.getElementById('css').value;
     let c = document.getElementById('js').value;
     let p = document.getElementById('boot').value;
     let grades = "";


     let totalGrades = parseFloat(w) + parseFloat(m) + parseFloat(c) + parseFloat(p);
     alert("Total Marks : " + totalGrades);
     //     swal("Good job!", "Your Total Mar", "success");

     let perc = (totalGrades / 400) * 100;
     //     alert("Percentage : " + perc);
     swal("Good job!", "Your Percentage: " + perc + "%", "success");

     if (perc <= 100 && perc >= 80) {
         grades = 'A';
     } else if (perc <= 79 && perc >= 60) {
         grades = 'B';
     } else if (perc <= 59 && perc >= 40) {
         grades = 'C';
     } else {
         grades = 'F';
     }

     if (perc >= 39.5) {
         document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Pass. `
     } else {
         document.getElementById('showData').innerHTML = ` Out of 400 your total is  ${totalGrades} and percentage is ${perc}%. <br> Your grade is ${grades}. You are Fail. `
     }


 }
