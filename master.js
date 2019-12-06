    // sticky navbar by Abhinay Arora 
    window.onscroll = function() {StickyFunction()};
      var navbar = document.getElementById("stickynav");
      var stickyoffset = navbar.offsetTop;
      function StickyFunction() {
        if (window.pageYOffset >= stickyoffset) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
      }
