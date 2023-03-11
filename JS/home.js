//Loader
var myVar;
function myFunction(){
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//Video
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");
  
  function vFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }

  //Slideshow
    
 function showSlides(slideIndex) {
      let i;
       let slides = document.getElementsByClassName("mySlides");
       let dots = document.getElementsByClassName("dot");
       for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {
           slideIndex = 1;
        }  

       for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
       }
       console.log(slideIndex);
       console.log(slides[slideIndex-1]);
       slides[slideIndex-1].style.display = "block";  
       dots[slideIndex-1].classList.add("active");
     }

     let slideIndex = 0;
     showSlides(slideIndex);

  
  
     function currentSlide(n) {
        showSlides(slideIndex = n);
    }
     setTimeout(showSlides, 2000);

//let slideIndex = 0;
//showSlides();

//function showSlides() {
//  let i;
//  let slides = document.getElementsByClassName("mySlides");
//  let dots = document.getElementsByClassName("dot");
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";  
 // }
 // slideIndex++;
 // if (slideIndex > slides.length) {slideIndex = 1}    
 // for (i = 0; i < dots.length; i++) {
 //   dots[i].className = dots[i].className.replace(" active", "");
 // }
 // slides[slideIndex-1].style.display = "block";  
 // dots[slideIndex-1].className += " active";
 // setTimeout(showSlides, 2000); // Change image every 2 seconds
//}

//Scroll to Top

// Get the button
let mybutton = document.getElementById("myBtnu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}