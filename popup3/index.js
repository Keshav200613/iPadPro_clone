var allelem = document.querySelector(".allshown");
var popup3 = document.querySelector(".mainflxboxpopup3");
function showpopup3() {
  function animpopup3() {
    anime({
      targets: allelem,
      filter: "blur(4px)",
      duration: 1300,
    });
    allelem.style.overflow = "hidden";
    popup2.style.display = "flex";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    anime({
      targets: popup3,
      opacity: [0, 1],
      translateY: ["+40%", "+5%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  setTimeout(animpopup3, 10);
}
function closepopup3() {
  function animpopup3_2() {
    anime({
      targets: popup3,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    popup3.style.display = "none";
    allelem.style.overflow = "visible";
    document.body.style.display = "block";
    document.body.style.justifyContent = "none";
    document.body.style.alignItems = "none";
    anime({
      targets: allelem,
      filter: ["blur(4px)", "blur(0px)"],
      duration: 1000,
    });
  }
  setTimeout(animpopup3_2, 10);
}

var isplayedvid_pop3 = false;
function revealpt3_popup3_1() {
  var vidplay__ = document.querySelector(".popup3pt2vid");
  var windowHeight = window.innerHeight;
  var revealtop = vidplay__.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop < windowHeight - revealpoint && isplayedvid_pop3 == false) {
    vidplay__.play();
    isplayedvid_pop3 = true;
  }
}
window.addEventListener("scroll", revealpt3_popup3_1);

var isplayedvid_pop3_2 = false;
function revealpt3_popup3_2() {
  var vidplay___ = document.querySelector(".popup3pt4vid");
  var windowHeight = window.innerHeight;
  var revealtop = vidplay___.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop < windowHeight - revealpoint && isplayedvid_pop3_2 == false) {
    vidplay___.play();
    isplayedvid_pop3_2 = true;
  }
}
window.addEventListener("scroll", revealpt3_popup3_2);
