var allelem = document.querySelector(".allshown");
var popup4 = document.querySelector(".mainflxboxpopup4");
var popup5=document.querySelector(".maincontentbox")
var popup6=document.querySelector(".subsection-wrapper")
var popup7=document.querySelector(".containsall")
var popup8=document.querySelector(".modal-overlay11")
var popup9=document.querySelector(".modal-overlay112")
var popup10=document.querySelector(".modal-overlay")
function showpopup4() {
  function animpopup4() {
    
    document.body.style.overflowY="hidden"
    document.querySelector("#scrollablediv5").style.visibility="visible";
    anime({
      targets: popup4,
      opacity: [0, 1],
      translateY: ["-40%", "0%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  allelem.classList.add("blur1")
  setTimeout(animpopup4, 10);
}
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
    allelem.classList.add("blur1")
    setTimeout(animpopup5, 10);
  }
function closepopup5() {
    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup5_2() {
    anime({
      targets: popup5,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv6").style.visibility="hidden";
    
  }
  document.getElementById("scrollablediv6").scrollTop=0;
  setTimeout(animpopup5_2, 10);
}
function closepopup4() {
  document.getElementById("scrollablediv5").scrollTop=0;
    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup4_2() {
    anime({
      targets: popup4,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv5").style.visibility="hidden";
    
  }
  setTimeout(animpopup4_2, 10);
}

const slider = document.querySelector(".comp_pic .slider");
const beforeImage = document.querySelector(".comp_pic .comp_pic_cnt .rton");
const sliderLine = document.querySelector(
  ".comp_pic .comp_pic_cnt .slider-line",
);
const sliderIcon = document.querySelector(
  ".comp_pic .comp_pic_cnt .slider-icon",
);

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";
  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});
function showpopup6() {
    function animpopup6() {
      
      document.body.style.overflowY="hidden"
      document.querySelector("#scrollablediv7").style.visibility="visible";
      anime({
        targets: popup6,
        opacity: [0, 1],
        translateY: ["-40%", "0%"],
        easing: "easeInQuad",
        duration: 1000,
      });
    }
    allelem.classList.add("blur1")
    setTimeout(animpopup6, 10);
  }
  function closepopup6() {
    document.getElementById("scrollablediv7").scrollTop=0;
    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup6_2() {
    anime({
      targets: popup6,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv7").style.visibility="hidden";
    
  }
  setTimeout(animpopup6_2, 10);
}
function showpopup7() {

    function animpopup7() {
      
      document.body.style.overflowY="hidden"
      document.querySelector("#scrollablediv8").style.visibility="visible";
      anime({
        targets: popup7,
        opacity: [0, 1],
        translateY: ["-40%", "0%"],
        easing: "easeInQuad",
        duration: 1000,
      });
    }
    allelem.classList.add("blur1")
    setTimeout(animpopup7, 10);
  }
  function closepopup7() {
    document.getElementById("scrollablediv8").scrollTop=0;
    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
 
  function animpopup7_2() {
    anime({
      targets: popup7,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv8").style.visibility="hidden";
    
  }
  setTimeout(animpopup7_2, 10);
}
function showpopup8() {

    function animpopup8() {
      
      document.body.style.overflowY="hidden"
      document.querySelector("#scrollablediv9").style.visibility="visible";
      anime({
        targets: popup8,
        opacity: [0, 1],
        translateY: ["-40%", "0%"],
        easing: "easeInQuad",
        duration: 1000,
      });
    }
    allelem.classList.add("blur1")
    setTimeout(animpopup8, 10);
  }
  function closepopup8() {
    document.getElementById("scrollablediv9").scrollTop=0;
    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup8_2() {
    anime({
      targets: popup8,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv9").style.visibility="hidden";
    
  }
  setTimeout(animpopup8_2, 10);
}
function showpopup9() {
 
    function animpopup9() {
      
      document.body.style.overflowY="hidden"
      document.querySelector("#scrollablediv10").style.visibility="visible";
      anime({
        targets: popup9,
        opacity: [0, 1],
        translateY: ["-40%", "0%"],
        easing: "easeInQuad",
        duration: 1000,
      });
    }
    allelem.classList.add("blur1")
    setTimeout(animpopup9, 10);
  }
  function closepopup9() {
    document.getElementById("scrollablediv10").scrollTop=0;

    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup9_2() {
    anime({
      targets: popup9,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv10").style.visibility="hidden";
    
  }
  setTimeout(animpopup9_2, 10);
}
function showpopup10() {

    function animpopup10() {
      
      document.body.style.overflowY="hidden"
      document.querySelector("#scrollablediv11").style.visibility="visible";
      anime({
        targets: popup10,
        opacity: [0, 1],
        translateY: ["-40%", "0%"],
        easing: "easeInQuad",
        duration: 1000,
      });
    }
    allelem.classList.add("blur1")
    setTimeout(animpopup10, 10);
  }
  function closepopup10() {
    document.getElementById("scrollablediv11").scrollTop=0;

    setTimeout(()=>{allelem.classList.remove('blur1')
    },600)
  function animpopup10_2() {
    anime({
      targets: popup10,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv11").style.visibility="hidden";
    
  }
  setTimeout(animpopup10_2, 10);
}