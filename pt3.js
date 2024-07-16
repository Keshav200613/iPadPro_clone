var isplayedvid = false;
function revealpt3_1() {
  var vidplay_ = document.querySelector(".txt1vid_");
  var windowHeight = window.innerHeight;
  var revealtop = vidplay_.getBoundingClientRect().top;
  var revealpoint = 250;
  if (revealtop < windowHeight - revealpoint && isplayedvid == false) {
    vidplay_.play();
    isplayedvid = true;
    anime({
      targets: ".szofff",
      opacity: [0, 1],
      duration: 600,
      delay: 1900,
      easing: "easeInQuad",
    });
    anime({
      targets: ".desc_vid",
      opacity: [0, 0.6],
      duration: 600,
      delay: 1900,
      easing: "easeInQuad",
    });
  }
}
window.addEventListener("scroll", revealpt3_1);

var allelem = document.querySelector(".allshown");
var popup2 = document.querySelector(".mainflxboxpopup2");
var to_scroll = document.querySelector(".pt3");
var scrollpos = 0;
console.log("1");
function showpopup2() {
  scrollpos = to_scroll.getBoundingClientRect().top - 3000;
  scrollpos = scrollpos - 2 * scrollpos;
  console.log(scrollpos);
  function animpopup2() {
   
    allelem.style.overflow = "hidden";
    popup2.style.display = "flex";
    allelem.style.display = "none";
    document.body.style.backgroundColor = "rgb(27,27,27)";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    window.scrollTo(0, 0);
    anime({
      targets: popup2,
      opacity: [0, 1],
      translateY: ["+40%", "+5%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  allelem.classList.add('blur1')

  setTimeout(animpopup2, 10);
}
function closepopup2() {
  anime({
    targets: popup2,
    opacity: [1, 0],
    easing: "easeOutQuad",
    duration: 500,
  });
  setTimeout(()=>{
  document.body.style.backgroundColor = "black";
  allelem.style.overflow = "visible";
  allelem.style.display = "block";
  video4.style.position='absolute'
  window.scrollTo(0, scrollpos);

  },510)
  setTimeout(()=>{allelem.classList.remove('blur1')

  },600)
  function animpopup2_2() {
    
    popup2.style.display = "none";
    
    document.body.style.backgroundColor = "black";
    document.body.style.display = "block";
    document.body.style.justifyContent = "none";
    document.body.style.alignItems = "none";
    document.querySelector(".buttons_phone").style.position = "absolute";
  document.querySelector(".buttons_pt2").style.position = "static";
    document.querySelector(".buttons_pt2").style.visibility = "hidden";
    document.querySelector("#pauseplay").style.position = "static";
    document.querySelector("#pauseplay").style.visibility = "hidden";
    
  }

  setTimeout(animpopup2_2, 1000);
}

var isplayedvid2 = false;
function revealpt3_2() {
  var vidplay_2 = document.querySelector(".pt3_2");
  var windowHeight2 = window.innerHeight;
  var revealtop2 = vidplay_2.getBoundingClientRect().top;
  var revealpoint2 = 250;
  if (revealtop2 < windowHeight2 - revealpoint2 && isplayedvid2 == false) {
    vidplay_2.play();
    isplayedvid2 = true;
  }
}
window.addEventListener("scroll", revealpt3_2);
