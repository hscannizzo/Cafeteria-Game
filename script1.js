
var element = document.querySelector('.fade-out-element'); 
function fadeOut(el) {
   var opacity = 1; // Initial opacity
   var interval = setInterval(function() {
      if (opacity > 0) {
         opacity -= 0.015;
         el.style.opacity = opacity;
      } else {
         clearInterval(interval); // Stop the interval when opacity reaches 0
         el.style.display = 'none'; // Hide the element
      }
   }, 50);
}
fadeOut(element);
