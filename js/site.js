/* This is the main JS file */

// form validation




// 2 forms, one as a main and one inline as a section or somnething with modal






/* automatic update date in the footer */

var currentDateFooter = new Date();
var currentYearFooter = currentDateFooter.getFullYear();
var copy_year = document.getElementById( "copy_year" );

copy_year.innerText = currentYearFooter;



/* To Top button */

//Get the button:
var myToTopButton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myToTopButton.style.display = 'block';
  } else {
    myToTopButton.style.display = 'none';
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



