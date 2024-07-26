var isplayedvid24 = false;
function revealpt4_1() {
  var vidplay_1 = document.querySelector(".osimgcl");
  var windowHeight = window.innerHeight;
  var revealtop1 = vidplay_1.getBoundingClientRect().top;
  var revealpoint = 250;
  


  if (revealtop1 < windowHeight - revealpoint && isplayedvid24 == false) {
    vidplay_1.play();
    
    isplayedvid24 = true;
  }
}
window.addEventListener("scroll", revealpt4_1);

var isplayedvid1 = false;
function revealpt4_2() {
  var vidplay_2 = document.querySelector(".pencilvid");
  var windowHeight = window.innerHeight;
  var revealtop2 = vidplay_2.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop2 < windowHeight - revealpoint && isplayedvid1 == false) {
    vidplay_2.play();
    isplayedvid1 = true;
  }
}
window.addEventListener("scroll", revealpt4_2);

var isplayedvid25 = false;
function revealpt4_3() {
  var vidplay_3 = document.querySelector(".kbvpl");
  var windowHeight = window.innerHeight;
  var revealtop3 = vidplay_3.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop3 < windowHeight - revealpoint && isplayedvid25 == false) {
    vidplay_3.play();
    isplayedvid25 = true;
  }
}
window.addEventListener("scroll", revealpt4_3);

var isplayedvid3 = false;
function revealpt4_4() {
  var vidplay_4 = document.querySelector(".recordingvid");
  var windowHeight = window.innerHeight;
  var revealtop4 = vidplay_4.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop4 < windowHeight - revealpoint && isplayedvid3 == false) {
    vidplay_4.play();
    isplayedvid3 = true;
  }
}
window.addEventListener("scroll", revealpt4_4);

var isplayedvid4 = false;
function revealpt4_5() {
  var vidplay_5 = document.querySelector(".connectvid");
  var windowHeight = window.innerHeight;
  var revealtop5 = vidplay_5.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop5 < windowHeight - revealpoint && isplayedvid4 == false) {
    vidplay_5.play();
    isplayedvid4 = true;
  }
}
window.addEventListener("scroll", revealpt4_5);
