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

  $(document).ready(function() {
    var myVideo = document.getElementById("my-video");
  
    myVideo.addEventListener("play", function() {
      $(this).css({
        "transform": "scale(1.2)",
        "transform-origin": "center",
        "margin": "0 auto"
      });
    }, false);
  });
