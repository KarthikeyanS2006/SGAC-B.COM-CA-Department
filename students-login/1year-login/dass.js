//Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }









    
        function displayNumber() {
            // Retrieve the number from local storage
            const number = localStorage.getItem('savedNumber');
            // Display the number on the page
            document.getElementById('numberDisplay').innerText = number;
        }

        // Call the function to display the number when the page loads
        window.onload = displayNumber;












        
    
       