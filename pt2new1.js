var isblack = true;
var posn = 0;
var btn1 = document.querySelector(".flex_btns_left");
var btn2 = document.querySelector(".flex_btns_right");
var winwidth = window.innerWidth;
console.log(winwidth);

function leftclick() {
  if (posn <= 3 && posn != 0) {
    var change2 = false;
    var change = false;
    var posnset = "+=12.5%";
    if (posn == 3) {
      if (winwidth > 1600) {
        posnset = "+=12.5%";
        change2 = true;
        posn--;
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "+=14.5%";
        change2 = true;
        posn--;
      }
    } else if (posn == 2) {
      if (winwidth > 1600) {
        posnset = "+=12.5%";
        posn--;
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "+=13.8%";
        posn--;
      }
    } else if (posn == 1) {
      if (winwidth > 1600) {
        posnset = "+=12.5%";
        posn--;
        change = true;
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "+=15.2%";
        posn--;
        change = true;
      }
    }

    anime({
      targets: ".pt2new1placard_flx",
      translateX: posnset,
      easing: "easeInQuad",
      duration: 400,
    });
    if (change) {
      anime({
        targets: btn1,
        opacity: [1, 0.2],
        duration: 200,
        delay: 600,
      });
      btn1.style.cursor = "default";
    } else if (change2) {
      anime({
        targets: btn2,
        opacity: [0.2, 1],
        duration: 200,
        delay: 600,
      });
      btn2.style.cursor = "pointer";
    }
  }
}

function rightclick() {
  if (posn >= 0 && posn != 3) {
    var change2 = false;
    var change = false;
    var posnset = "-=12.5%";
    if (posn == 0) {
      if (winwidth > 1600) {
        posnset = "-=12.5%";
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "-=15.2%";
      }
      change2 = true;
      posn++;
    } else if (posn == 2) {
      if (winwidth > 1600) {
        posnset = "-=12.5%";
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "-=14.5%";
      }
      change = true;
      posn++;
    } else if (posn == 1) {
      if (winwidth > 1600) {
        posnset = "-=12.5%";
        posn++;
      } else if (winwidth > 1000 && winwidth < 1600) {
        posnset = "-=13.8%";
        posn++;
      }
    }
    anime({
      targets: ".pt2new1placard_flx",
      translateX: posnset,
      easing: "easeInQuad",
      duration: 400,
    });
    if (change) {
      anime({
        targets: btn2,
        opacity: [1, 0.2],
        duration: 200,
        delay: 1000,
      });
      btn2.style.cursor = "default";
    } else if (change2) {
      anime({
        targets: btn1,
        opacity: [0.2, 1],
        duration: 200,
        delay: 1000,
      });
      btn1.style.cursor = "pointer";
    }
  }
}
// var cnt1 = document.querySelector('.new1_1');
// var btn = document.querySelector('.color_blacktowhite');
const la = document.querySelector("#black1");
la.addEventListener("click", (e) => {
  e.stopPropagation();
  if (button1 == false) {
    anime({
      targets: la,
      outlineWidth: ["3px", "6px"],
      easing: "easeOutExpo",
    });
    anime({
      targets: [".black_imgs"],
      opacity: [0, 1],
      easing: "easeInQuad",
    });
    anime({
      targets: [".new1_1_white", ".new1_2_white", ".new1_3_white"],
      opacity: [1, 0],
      easing: "easeInQuad",
    });
    la.classList.add("clickedblack");
    t.classList.remove("clickedwhite");
    t.classList.remove("white2");
    t.classList.remove("black2");
    button1 = true;
    button2 = false;
  }
});
const t = document.querySelector("#white1");
var button1 = true;
var button2 = false;
t.addEventListener("click", (e) => {
  e.stopPropagation();
  if (button2 == false) {
    anime({
      targets: t,
      outlineWidth: ["0px", "2px"],
    });
    anime({
      targets: [".black_imgs"],
      opacity: [1, 0],
      easing: "easeInQuad",
      duration: 500,
    });
    anime({
      targets: [".new1_1_white", ".new1_2_white", ".new1_3_white"],
      opacity: [0, 1],
      easing: "easeInQuad",
      duration: 500,
    });
    t.classList.remove("white2");
    t.classList.add("clickedwhite");
    la.classList.remove("black2");
    la.classList.remove("clickedblack");
    button1 = false;
    button2 = true;
  }
});
const bt1 = document.querySelector(".buttons_phone");
bt1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (button1 == true) {
    anime({
      targets: la,
      outlineWidth: ["3px", "2px"],
      easing: "easeOutExpo",
      duration: 1000,
    });
    la.classList.remove("clickedblack");
    la.classList.add("black2");
  } else if (button2 == true) {
    anime({
      targets: t,
      outlineWidth: ["3px", "2px"],
      easing: "easeOutExpo",
      duration: 1000,
    });
    t.classList.remove("clickedwhite");
    t.classList.add("white2");
  }
});
btn1.addEventListener("click", leftclick);
btn2.addEventListener("click", rightclick);
