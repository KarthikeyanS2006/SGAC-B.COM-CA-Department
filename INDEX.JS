//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("link");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function fun(){
    var tel= document.forms["form"] ["tel"].value;
    var date=document.forms["form"]["date"].value;
    
    var password = "BCOMCA"
    if(tel==null || tel=="") {
        document.getElementById("Reg-error").innerHTML ="Enter Correct RegNo";
        return false;
        
    }
    if (tel <1622152000) {
        document.getElementById("Reg-error").innerHTML="PLEASES ENTER THE CORRECT REGNO ";
        return false;
    }
    if (date != password) {
        document.getElementById("Reg-error").innerHTML="ENTER CORRECT PASSWORD ";
        return false;
    }
    if(date==null || date=="") {
    document.getElementById("Reg-error").innerHTML ="Enter Correct Date Of Birth";
    return false;
        
    }
   }
  