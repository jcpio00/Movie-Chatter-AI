//The dropdown is triggered by clicking the button, and will close if the user moves their mouse outside of the dropdown menu.

document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector(".dropdown-toggle");
    var dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdownToggle.addEventListener("click", function() {
      dropdownMenu.classList.toggle("show");
    });
  
    dropdownMenu.addEventListener("mouseleave", function() {
      dropdownMenu.classList.remove("show");
    });
  });
  