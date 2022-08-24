window.onload=setTimeout(showPage,3000);


function showPage(){
    document.getElementById("loader").style.display= "none";
    document.getElementById("contactform").style.display= "block";
}

function isOnline() {
  
    if (navigator.onLine) {
        alert("Online!");
        
    } else {
        alert("Offline!")
    }
}
