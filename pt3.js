var isplayedvid = false;


function revealpt3_1() {
  document.querySelector(".pt2new1placard_flx").style.paddingLeft=document.querySelector(".pt2_new1").getBoundingClientRect().left+"px"
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
function showpopup2() {
  function animpopup2() {
   
    document.body.style.overflowY="hidden"
    document.querySelector("#scrollablediv4").style.visibility="visible"; 
    anime({
      targets: popup2,
      opacity: [0, 1],
      translateY: ["-40%", "0%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  allelem.classList.add('blur1')

  setTimeout(animpopup2, 10);
}
function closepopup2() {
  document.getElementById("scrollablediv4").scrollTop=0;
  anime({
    targets: popup2,
    opacity: [1, 0],
    easing: "easeOutQuad",
    duration: 500,
  });
  
  setTimeout(()=>{allelem.classList.remove('blur1')

  },600)
  function animpopup2_2() {
    
    document.querySelector("#scrollablediv4").style.visibility="hidden"; 
    document.body.style.overflowY="visible"

    
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
var popup5=document.querySelector(".maincontentbox")
function showpopup5() {
  
  function animpopup5() {
   
    document.body.style.overflowY="hidden"
    document.querySelector("#scrollablediv6").style.visibility="visible"; 
    anime({
      targets: popup5,
      opacity: [0, 1],
      translateY: ["-40%", "0%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  allelem.classList.add('blur1')

  setTimeout(animpopup5, 10);
}
function closepopup5() {
  anime({
    targets: popup5,
    opacity: [1, 0],
    easing: "easeOutQuad",
    duration: 500,
  });
  
  setTimeout(()=>{allelem.classList.remove('blur1')

  },600)
  function animpopup5_2() {
    
     document.querySelector("#scrollablediv6").style.visibility="hidden"; 
  document.body.style.overflowY="visible"
    
  }

  setTimeout(animpopup5_2, 1000);
}
