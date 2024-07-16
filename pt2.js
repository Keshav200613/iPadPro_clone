var checked=false
function openvideo() {
  var main_doc = document.querySelector(".allshown");
  main_doc.style.display = "none";
  main_doc.style.overflow = "hidden";
  document.body.style.backgroundColor = "rgb(27, 27, 27)";
  var popup = document.querySelector(".container_popup_vid");
  popup.style.display = "block";
  popup.style.opacity = 1;
 checked=true
  function start_delay() {
    anime({
      targets: ".pic_banner1",
      opacity: [1, 0],
      position: "relative",
      delay: 1000,
    });
    anime({
      targets: ".container_vid_trailer",
      opacity: [0, 1],
      position: "relative",
      delay: 100,
      easing: "easeInExpo",
    });
    var vid = document.querySelector(".container_vid_trailer");
    vid.play();
  }
  setTimeout(start_delay, 1000);
}

function close_popup_vid() {
  var main_doc = document.querySelector(".allshown");
  main_doc.style.display = "block";
  main_doc.style.overflow = "visible";
  document.body.style.backgroundColor = "black";

  document.querySelector(".buttons_phone").style.position = "absolute";
  document.querySelector(".buttons_pt2").style.position = "static";
    document.querySelector(".buttons_pt2").style.visibility = "hidden";
    document.querySelector("#pauseplay").style.position = "static";
    document.querySelector("#pauseplay").style.visibility = "hidden";
  checked=false
  var popup = document.querySelector(".container_popup_vid");
  popup.style.display = "none";
  var vid = document.querySelector(".container_vid_trailer");
  vid.pause();
  vid.currentTime = 0;
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150 + i * 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
let counter = 1;
var run = false;
var closing = false;
function animeplacards() {
  var hd1cpy = document.querySelector(".hd1");
  var p1cpy = document.querySelector(".p1");
  var p11cpy = document.querySelector(".p11");
  var placards = document.querySelector(".flx_placards");
  var windowHeight = window.innerHeight;
  var revealtop = placards.getBoundingClientRect().top;
  var revealpoint = 450;
  if (revealtop < windowHeight - revealpoint && !closing) {
    closing = true;
    animation.play();
  }
}

var play;

document.querySelector(".play").addEventListener("click", () => {
  play = true;
  if (counter == 1) {
    animation = anime.timeline();

     //slide 2 transition to slide 3
    animation
      .add({
        targets: [".hd1", ".p1", ".p11"],
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
        began: function (anime) {
          counter = 1;
        },
        complete: function (anime) {
          pausetime = true;
        },
      })

      //slide1 transition to slide 2

      .add({
        opacity: [1, 0],
        targets: [".hd1", ".p1", ".p11"],
        translateX: -100,
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading1").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading1").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-83vw",

          complete: function (anim) {
            counter = 2;
           
              a[1].style.background = "rgb(174, 163, 163)";
              a[1].style.width = "47px";
              a[1].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
          
          },

          easing: "easeInQuad",
        },
        "-=600"
      )

      .add(
        {
          targets: [".hd2", ".p2"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd2", ".p2"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading2").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading2").style.width = "0px";
          }
        },
      })

      .add(
        {
          targets: placards,
          left: "-163vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 3;
            
              a[2].style.background = "rgb(174, 163, 163)";
              a[2].style.width = "47px";
              a[2].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=500"
      )

      //slide 3 anim
      .add(
        {
          targets: [".hd3", ".p3"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 3 to slide 4
      .add({
        targets: [".hd3", ".p3"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading3").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading3").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-253vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 4;
           
              a[3].style.background = "rgb(174, 163, 163)";
              a[3].style.width = "47px";
              a[3].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: ".p4",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 4 to slide5
      .add({
        targets: ".p4",
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading4").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading4").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-333vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 5;
           
              a[4].style.background = "rgb(174, 163, 163)";
              a[4].style.width = "47px";
              a[4].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 5 to slide 6
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
          document.querySelector(".loading5").style.width = "0px";
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
           
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
           
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;

              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";

              play=false
              press=true
            }
          }
        },
      });
  } else if (counter == 2) {
    animation = anime.timeline();

     //slide 2 transition to slide 3
    animation

      .add({
        targets: [".hd2", ".p2"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading2").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading2").style.width = "0px";
          }
        },
      })

      .add(
        {
          targets: placards,
          left: "-163vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 3;
          
              a[2].style.background = "rgb(174, 163, 163)";
              a[2].style.width = "47px";
              a[2].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=500"
      )

      //slide 3 anim
      .add(
        {
          targets: [".hd3", ".p3"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 3 to slide 4
      .add({
        targets: [".hd3", ".p3"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading3").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading3").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-253vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 4;
           
              a[3].style.background = "rgb(174, 163, 163)";
              a[3].style.width = "47px";
              a[3].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: ".p4",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 4 to slide5
      .add({
        targets: ".p4",
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
          document.querySelector(".loading4").style.width = "0px";
        },
        update: function (anime) {
          document.querySelector(".loading4").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
        },
      })
      .add(
        {
          targets: placards,
          left: "-333vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 5;
           
              a[4].style.background = "rgb(174, 163, 163)";
              a[4].style.width = "47px";
              a[4].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 5 to slide 6
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
            
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;

              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";

              play=false
              press=true
            }
          }
        },
      });
  } else if (counter == 3) {
    animation = anime.timeline();

    //slide 3 to slide 4
    animation
      .add({
        targets: [".hd3", ".p3"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading3").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading3").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-253vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 4;
          
              a[3].style.background = "rgb(174, 163, 163)";
              a[3].style.width = "47px";
              a[3].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: ".p4",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 4 to slide5
      .add({
        targets: ".p4",
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading4").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading4").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-333vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 5;
            
              a[4].style.background = "rgb(174, 163, 163)";
              a[4].style.width = "47px";
              a[4].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 5 to slide 6
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
          
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
         
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;

              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";

              play=false
              press=true
            }
          }
        },
      });
  } else if (counter == 4) {
    animation = anime.timeline();
    animation
      .add({
        targets: ".p4",
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading4").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading4").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-333vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 5;
           
              a[4].style.background = "rgb(174, 163, 163)";
              a[4].style.width = "47px";
              a[4].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 5 to slide 6
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
      
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
          
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
           
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;

              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";

              play=false
              press=true
            }
          }
        },
      });
  } else if (counter == 5) {
    animation = anime.timeline();
    animation
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
           
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;

              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";

              play=false
              press=true
            }
          }
        },
      });

  }
  else if(counter==6){
    animation=anime.timeline()
    animation
    .add({
      targets: [".hd6", ".p6"],
      opacity: [1, 1],
      translateX: [0, 0],
      easing: "easeInExpo",
      delay: 1500,
      update: function (anime) {
        pausetime = true;
        document.querySelector(".loading6").style.width =
          (Math.round(anime.progress) * 47) / 100 + "px";
        if (Math.round(anime.progress) == 100) {
          document.querySelector(".loading6").style.width = "0px";
          if (play == true) {
            restart = true;

            document.querySelector(".restartbutton").style.overflow =
              "visible";
            document.querySelector(".restartbutton").style.maxHeight =
              "35px";
            document.querySelector(".restartbutton").style.maxWidth =
              "35px";
            playbutton.style.overflow = "hidden";
            playbutton.style.maxHeight = "0px";
            playbutton.style.maxWidth = "0px";
            play=false
            press=true
          }
        }
      },
    });
  }
});
var pausetime = false;

document.querySelector(".pause").addEventListener("click", () => {
  clearTimeout();

  if (pausetime == true) {
    play = false;
    animation.pause();
  }
});

const a = document.querySelectorAll(".active_button");
var midplay = false;
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("mouseover", () => {
    a[i].style.background = "grey";
  });
  a[i].addEventListener("mouseleave", () => {
    a[i].style.background = "rgb(174, 163, 163)";
  });
  a[i].addEventListener("click", () => {
    clearTimeout();
    
    if (restart == true) {
      restart = false;
      play = false;
      console.log("visible");
      playbutton.style.overflow = "hidden";
      playbutton.style.maxHeight = "0px";
      playbutton.style.maxWidth = "0px";
      pausebutton.style.overflow = "visible";
      pausebutton.style.opacity= "1";
      pausebutton.style.maxHeight = "35px";
      pausebutton.style.maxWidth = "35px";
      document.querySelector(".restartbutton").style.overflow = "hidden";
      document.querySelector(".restartbutton").style.maxHeight = "0px";
      document.querySelector(".restartbutton").style.maxWidth = "0px";
      press = true;
    }
    if (play == false) {
      pausebutton.style.overflow = "visible";
      pausebutton.style.maxHeight = "35px";
      pausebutton.style.maxWidth = "35px";
    }
    document.querySelector(".loading1").style.width = "0px";
    document.querySelector(".loading2").style.width = "0px";
    document.querySelector(".loading3").style.width = "0px";
    document.querySelector(".loading4").style.width = "0px";
    document.querySelector(".loading5").style.width = "0px";
    document.querySelector(".loading6").style.width = "0px";
    midplay = true;
    animation.pause();
    a[i].style.background = "rgb(174, 163, 163)";
    a[i].style.width = "47px";
    a[i].style.borderRadius = "20px";
    if (i == 0 /*|| counter==1*/) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      a[1].style.width = "10px";
      a[1].style.borderRadius = "50%";
      a[2].style.width = "10px";
      a[2].style.borderRadius = "50%";
      a[3].style.width = "10px";
      a[3].style.borderRadius = "50%";
      a[4].style.width = "10px";
      a[4].style.borderRadius = "50%";
      a[5].style.width = "10px";
      a[5].style.borderRadius = "50%";
      placards.style.left = "0vw";
      anime({
        targets: [".hd1", ".p1", ".p11"],
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
      });
      counter = 1;
    } else if (i == 1) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      counter = 2;
      a[0].style.width = "10px";
      a[0].style.borderRadius = "50%";
      a[2].style.width = "10px";
      a[2].style.borderRadius = "50%";
      a[3].style.width = "10px";
      a[3].style.borderRadius = "50%";
      a[4].style.width = "10px";
      a[4].style.borderRadius = "50%";
      a[5].style.width = "10px";
      a[5].style.borderRadius = "50%";
      placards.style.left = "-83vw";
      anime(
        {
          targets: [".hd2", ".p2"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
        },
        "-=500"
      );
    } else if (i == 2 /*|| counter==1*/) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      counter = 3;
      a[1].style.width = "10px";
      a[1].style.borderRadius = "50%";
      a[0].style.width = "10px";
      a[0].style.borderRadius = "50%";
      a[3].style.width = "10px";
      a[3].style.borderRadius = "50%";
      a[4].style.width = "10px";
      a[4].style.borderRadius = "50%";
      a[5].style.width = "10px";
      a[5].style.borderRadius = "50%";
      placards.style.left = "-163vw";
      anime(
        {
          targets: [".hd3", ".p3"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
        },
        "-=500"
      );
    } else if (i == 3 /*|| counter==1*/) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      counter = 4;
      a[1].style.width = "10px";
      a[1].style.borderRadius = "50%";
      a[2].style.width = "10px";
      a[2].style.borderRadius = "50%";
      a[0].style.width = "10px";
      a[0].style.borderRadius = "50%";
      a[4].style.width = "10px";
      a[4].style.borderRadius = "50%";
      a[5].style.width = "10px";
      a[5].style.borderRadius = "50%";
      placards.style.left = "-253vw";
      anime(
        {
          targets: ".p4",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
        },
        "-=500"
      );
    } else if (i == 4) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      counter = 5;
      a[1].style.width = "10px";
      a[1].style.borderRadius = "50%";
      a[2].style.width = "10px";
      a[2].style.borderRadius = "50%";
      a[3].style.width = "10px";
      a[3].style.borderRadius = "50%";
      a[0].style.width = "10px";
      a[0].style.borderRadius = "50%";
      a[5].style.width = "10px";
      a[5].style.borderRadius = "50%";
      placards.style.left = "-333vw";
      anime(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
        },
        "-=500"
      );
    } else if (i == 5 ) {
      if (restart == true) {
        restart = false;
        play = false;
        console.log("visible");
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        pausebutton.style.overflow = "visible";
     
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        press = true;
      }
      counter = 6;
      a[1].style.width = "10px";
      a[1].style.borderRadius = "50%";
      a[2].style.width = "10px";
      a[2].style.borderRadius = "50%";
      a[3].style.width = "10px";
      a[3].style.borderRadius = "50%";
      a[4].style.width = "10px";
      a[4].style.borderRadius = "50%";
      a[0].style.width = "10px";
      a[0].style.borderRadius = "50%";
      placards.style.left = "-413vw";
      anime(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
        
        },
        "-=500"
      );
    }

    if (play == true) {
      if (counter == 1) {
        animation = anime.timeline();

        //slide 2 transition to slide 3
        animation
          .add({
            targets: [".hd1", ".p1", ".p11"],
            translateX: [100, 0],
            opacity: [0, 1],
            easing: "easeInExpo",
            began: function (anime) {
              counter = 1;
            },
            complete: function (anime) {
              pausetime = true;
            },
          })
          .add(
            {
              targets: [".hd2", ".p2"],
              opacity: [0, 1],
              translateX: [100, 0],
              easing: "easeInExpo",

              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide1 transition to slide 2

          .add({
            opacity: [1, 0],
            targets: [".hd1", ".p1", ".p11"],
            translateX: -100,
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              document.querySelector(".loading1").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading1").style.width = "0px";
              }
            },
            complete: function (anime) {
              pausetime = false;
            },
          })
          .add(
            {
              targets: placards,
              left: "-83vw",

              complete: function (anim) {
                counter = 2;
               
                  a[1].style.background = "rgb(174, 163, 163)";
                  a[1].style.width = "47px";
                  a[1].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
              easing: "easeInQuad",
            },
            "-=600"
          )

          .add({
            targets: [".hd2", ".p2"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading2").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading2").style.width = "0px";
              }
            },
          })

          .add(
            {
              targets: placards,
              left: "-163vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 3;
                
                  a[2].style.background = "rgb(174, 163, 163)";
                  a[2].style.width = "47px";
                  a[2].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=500"
          )

          //slide 3 anim
          .add(
            {
              targets: [".hd3", ".p3"],
              opacity: [0, 1],
              translateX: [100, 0],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 3 to slide 4
          .add({
            targets: [".hd3", ".p3"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading3").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading3").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-253vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 4;
              
                  a[3].style.background = "rgb(174, 163, 163)";
                  a[3].style.width = "47px";
                  a[3].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: ".p4",
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 4 to slide5
          .add({
            targets: ".p4",
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading4").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading4").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-333vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 5;
               
                  a[4].style.background = "rgb(174, 163, 163)";
                  a[4].style.width = "47px";
                  a[4].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
              
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd5", ".p5"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 5 to slide 6
          .add({
            targets: [".hd5", ".p5"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading5").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading5").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-413vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 6;
              
                  a[5].style.background = "rgb(174, 163, 163)";
                  a[5].style.width = "47px";
                  a[5].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd6", ".p6"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              
            },
            "-=500"
          )
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";

                  playbutton.style.maxWidth = "0px";

                  play=false
                  press=true
                }
              }
            },
          });
      } else if (counter == 2) {
        animation = anime.timeline();

        //slide 2 transition to slide 3
        animation

          .add({
            targets: [".hd2", ".p2"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading2").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading2").style.width = "0px";
              }
            },
          })

          .add(
            {
              targets: placards,
              left: "-163vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 3;
                
                  a[2].style.background = "rgb(174, 163, 163)";
                  a[2].style.width = "47px";
                  a[2].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=500"
          )

          //slide 3 anim
          .add(
            {
              targets: [".hd3", ".p3"],
              opacity: [0, 1],
              translateX: [100, 0],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 3 to slide 4
          .add({
            targets: [".hd3", ".p3"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading3").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading3").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-253vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 4;
                
                  a[3].style.background = "rgb(174, 163, 163)";
                  a[3].style.width = "47px";
                  a[3].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: ".p4",
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 4 to slide5
          .add({
            targets: ".p4",
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading4").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading4").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-333vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 5;
                
                  a[4].style.background = "rgb(174, 163, 163)";
                  a[4].style.width = "47px";
                  a[4].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd5", ".p5"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 5 to slide 6
          .add({
            targets: [".hd5", ".p5"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading5").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading5").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-413vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 6;
               
                  a[5].style.background = "rgb(174, 163, 163)";
                  a[5].style.width = "47px";
                  a[5].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd6", ".p6"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
             
            },
            "-=500"
          )
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";

                  playbutton.style.maxWidth = "0px";

                  play=false
                  press=true
                }
              }
            },
          });
      } else if (counter == 3) {
        animation = anime.timeline();

        //slide 3 to slide 4
        animation
          .add({
            targets: [".hd3", ".p3"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading3").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading3").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-253vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 4;
                
                  a[3].style.background = "rgb(174, 163, 163)";
                  a[3].style.width = "47px";
                  a[3].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: ".p4",
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 4 to slide5
          .add({
            targets: ".p4",
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading4").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading4").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-333vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 5;
             
                  a[4].style.background = "rgb(174, 163, 163)";
                  a[4].style.width = "47px";
                  a[4].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd5", ".p5"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 5 to slide 6
          .add({
            targets: [".hd5", ".p5"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading5").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading5").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-413vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 6;
            
                  a[5].style.background = "rgb(174, 163, 163)";
                  a[5].style.width = "47px";
                  a[5].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd6", ".p6"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",

            },
            "-=500"
          )
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";

                  playbutton.style.maxWidth = "0px";

                  play=false
                  press=true
                }
              }
            },
           
          });
      } else if (counter == 4) {
        animation = anime.timeline();
        animation
          .add({
            targets: ".p4",
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading4").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading4").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-333vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 5;
                
                  a[4].style.background = "rgb(174, 163, 163)";
                  a[4].style.width = "47px";
                  a[4].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                  a[5].style.width = "10px";
                  a[5].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd5", ".p5"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
              complete: function (anime) {
                pausetime = true;
              },
            },
            "-=500"
          )
          //slide 5 to slide 6
          .add({
            targets: [".hd5", ".p5"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading5").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading5").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-413vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 6;
            
                  a[5].style.background = "rgb(174, 163, 163)";
                  a[5].style.width = "47px";
                  a[5].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd6", ".p6"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
             
            },
            "-=500"
          )
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";

                  playbutton.style.maxWidth = "0px";

                  play=false
                  press=true
                }
              }
            },
          });
      } else if (counter == 5) {
        animation = anime.timeline();
        animation
          .add({
            targets: [".hd5", ".p5"],
            opacity: [1, 0],
            translateX: [0, -100],
            easing: "easeInExpo",
            delay: 1500,
            complete: function (anime) {
              pausetime = false;
            },
            update: function (anime) {
              document.querySelector(".loading5").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading5").style.width = "0px";
              }
            },
          })
          .add(
            {
              targets: placards,
              left: "-413vw",
              easing: "easeInQuad",
              complete: function (anim) {
                counter = 6;
              
                  a[5].style.background = "rgb(174, 163, 163)";
                  a[5].style.width = "47px";
                  a[5].style.borderRadius = "20px";

                  a[0].style.width = "10px";
                  a[0].style.borderRadius = "50%";
                  a[2].style.width = "10px";
                  a[2].style.borderRadius = "50%";
                  a[3].style.width = "10px";
                  a[3].style.borderRadius = "50%";
                  a[4].style.width = "10px";
                  a[4].style.borderRadius = "50%";
                  a[1].style.width = "10px";
                  a[1].style.borderRadius = "50%";
                
              },
            },
            "-=700"
          )

          .add(
            {
              targets: [".hd6", ".p6"],
              translateX: [100, 0],
              opacity: [0, 1],
              easing: "easeInExpo",
            
            },
            "-=500"
          )
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";
                  playbutton.style.maxWidth = "0px";
                  play=false
                  press=true
                }
              }
            },
          });
          
      }
        else if(counter==6){
          animation=anime.timeline()
          animation
          .add({
            targets: [".hd6", ".p6"],
            opacity: [1, 1],
            translateX: [0, 0],
            easing: "easeInExpo",
            delay: 1500,
            update: function (anime) {
              pausetime = true;
              document.querySelector(".loading6").style.width =
                (Math.round(anime.progress) * 47) / 100 + "px";
              if (Math.round(anime.progress) == 100) {
                document.querySelector(".loading6").style.width = "0px";
                if (play == true) {
                  restart = true;

                  document.querySelector(".restartbutton").style.overflow =
                    "visible";
                  document.querySelector(".restartbutton").style.maxHeight =
                    "35px";
                  document.querySelector(".restartbutton").style.maxWidth =
                    "35px";
                  playbutton.style.overflow = "hidden";
                  playbutton.style.maxHeight = "0px";
                  playbutton.style.maxWidth = "0px";
                  play=false
                  press=true
                }
              }
            },
          });
        }
    }
  });
}

var slides = document.querySelectorAll(".slides");

var placards = document.querySelector(".flx_placards");

var animation = anime.timeline({
  autoplay: false,
});

animation
  .add({
    targets: [".hd1", ".p1", ".p11"],
    translateX: [100, 0],
    opacity: [0, 1],
    easing: "easeInExpo",
    began: function (anime) {
      counter = 1;
    },
    complete: function (anime) {
      pausetime = true;
    },
  })

  //slide1 transition to slide 2

  .add({
    opacity: [1, 0],
    targets: [".hd1", ".p1", ".p11"],
    translateX: -100,
    easing: "easeInExpo",
    delay: 1500,
    complete: function (anime) {
      pausetime = false;
    },
    update: function (anime) {
      document.querySelector(".loading1").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading1").style.width = "0px";
      }
    },
  })
  .add(
    {
      targets: placards,
      left: "-83vw",

      complete: function (anim) {
        counter = 2;
        
          a[1].style.background = "rgb(174, 163, 163)";
          a[1].style.width = "47px";
          a[1].style.borderRadius = "20px";

          a[0].style.width = "10px";
          a[0].style.borderRadius = "50%";
          a[2].style.width = "10px";
          a[2].style.borderRadius = "50%";
          a[3].style.width = "10px";
          a[3].style.borderRadius = "50%";
          a[4].style.width = "10px";
          a[4].style.borderRadius = "50%";
          a[5].style.width = "10px";
          a[5].style.borderRadius = "50%";
        
      },
      easing: "easeInQuad",
    },
    "-=600"
  )

  .add(
    {
      targets: [".hd2", ".p2"],
      opacity: [0, 1],
      translateX: [100, 0],
      easing: "easeInExpo",
      complete: function (anime) {
        pausetime = true;
      },
    },
    "-=500"
  )
  .add({
    targets: [".hd2", ".p2"],
    opacity: [1, 0],
    translateX: [0, -100],
    easing: "easeInExpo",
    delay: 1500,
    complete: function (anime) {
      pausetime = false;
    },
    update: function (anime) {
      document.querySelector(".loading2").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading2").style.width = "0px";
      }
    },
  })

  .add(
    {
      targets: placards,
      left: ["-83vw", "-163vw"],
      easing: "easeInQuad",
      complete: function (anim) {
        counter = 3;
        
          a[2].style.background = "rgb(174, 163, 163)";
          a[2].style.width = "47px";
          a[2].style.borderRadius = "20px";

          a[0].style.width = "10px";
          a[0].style.borderRadius = "50%";
          a[1].style.width = "10px";
          a[1].style.borderRadius = "50%";
          a[3].style.width = "10px";
          a[3].style.borderRadius = "50%";
          a[4].style.width = "10px";
          a[4].style.borderRadius = "50%";
          a[5].style.width = "10px";
          a[5].style.borderRadius = "50%";
        
      },
    },
    "-=500"
  )

  //slide 3 anim
  .add(
    {
      targets: [".hd3", ".p3"],
      opacity: [0, 1],
      translateX: [100, 0],
      easing: "easeInExpo",
      complete: function (anime) {
        pausetime = true;
      },
    },
    "-=500"
  )
  //slide 3 to slide 4
  .add({
    targets: [".hd3", ".p3"],
    opacity: [1, 0],
    translateX: [0, -100],
    easing: "easeInExpo",
    delay: 1500,
    complete: function (anime) {
      pausetime = false;
    },
    update: function (anime) {
      document.querySelector(".loading3").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading3").style.width = "0px";
      }
    },
  })
  .add(
    {
      targets: placards,
      left: ["-163vw", "-253vw"],
      easing: "easeInQuad",
      complete: function (anim) {
        counter = 4;
       
          a[3].style.background = "rgb(174, 163, 163)";
          a[3].style.width = "47px";
          a[3].style.borderRadius = "20px";

          a[0].style.width = "10px";
          a[0].style.borderRadius = "50%";
          a[2].style.width = "10px";
          a[2].style.borderRadius = "50%";
          a[1].style.width = "10px";
          a[1].style.borderRadius = "50%";
          a[4].style.width = "10px";
          a[4].style.borderRadius = "50%";
          a[5].style.width = "10px";
          a[5].style.borderRadius = "50%";
        
      },
    },
    "-=700"
  )

  .add(
    {
      targets: ".p4",
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeInExpo",
      complete: function (anime) {
        pausetime = true;
      },
    },
    "-=500"
  )
  //slide 4 to slide5
  .add({
    targets: ".p4",
    opacity: [1, 0],
    translateX: [0, -100],
    easing: "easeInExpo",
    delay: 1500,
    complete: function (anime) {
      pausetime = false;
    },
    update: function (anime) {
      document.querySelector(".loading4").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading4").style.width = "0px";
      }
    },
  })
  .add(
    {
      targets: placards,
      left: ["-253vw", "-333vw"],
      easing: "easeInQuad",
      complete: function (anim) {
        counter = 5;
        
          a[4].style.background = "rgb(174, 163, 163)";
          a[4].style.width = "47px";
          a[4].style.borderRadius = "20px";

          a[0].style.width = "10px";
          a[0].style.borderRadius = "50%";
          a[2].style.width = "10px";
          a[2].style.borderRadius = "50%";
          a[3].style.width = "10px";
          a[3].style.borderRadius = "50%";
          a[1].style.width = "10px";
          a[1].style.borderRadius = "50%";
          a[5].style.width = "10px";
          a[5].style.borderRadius = "50%";
        
      },
    },
    "-=700"
  )

  .add(
    {
      targets: [".hd5", ".p5"],
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeInExpo",
      complete: function (anime) {
        pausetime = true;
      },
    },
    "-=500"
  )
  //slide 5 to slide 6
  .add({
    targets: [".hd5", ".p5"],
    opacity: [1, 0],
    translateX: [0, -100],
    easing: "easeInExpo",
    delay: 1500,
    complete: function (anime) {
      pausetime = false;
    },
    update: function (anime) {
      document.querySelector(".loading5").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading5").style.width = "0px";
      }
    },
  })
  .add(
    {
      targets: placards,
      left: ["-333vw", "-413vw"],
      easing: "easeInQuad",
      complete: function (anim) {
        counter = 6;
       
          a[5].style.background = "rgb(174, 163, 163)";
          a[5].style.width = "47px";
          a[5].style.borderRadius = "20px";

          a[0].style.width = "10px";
          a[0].style.borderRadius = "50%";
          a[2].style.width = "10px";
          a[2].style.borderRadius = "50%";
          a[3].style.width = "10px";
          a[3].style.borderRadius = "50%";
          a[4].style.width = "10px";
          a[4].style.borderRadius = "50%";
          a[1].style.width = "10px";
          a[1].style.borderRadius = "50%";
      
      },
    },
    "-=700"
  )

  .add(
    {
      targets: [".hd6", ".p6"],
      translateX: [100, 0],
      opacity: [0, 1],
      easing: "easeInExpo",

    },
    "-=500"
  )
  .add({
    targets: [".hd6", ".p6"],
    opacity: [1, 1],
    translateX: [0, 0],
    easing: "easeInExpo",
    delay: 1500,
    update: function (anime) {
      pausetime = true;
      document.querySelector(".loading6").style.width =
        (Math.round(anime.progress) * 47) / 100 + "px";
      if (Math.round(anime.progress) == 100) {
        document.querySelector(".loading6").style.width = "0px";
        if (play == true) {
          restart = true;

          document.querySelector(".restartbutton").style.overflow = "visible";
          document.querySelector(".restartbutton").style.maxHeight = "35px";
          document.querySelector(".restartbutton").style.maxWidth = "35px";
          playbutton.style.overflow = "hidden";
          playbutton.style.maxHeight = "0px";

          playbutton.style.maxWidth = "0px";

          play=false
          press=true
        }
      }
    },
  });

var pauseplaybutton = document.querySelector("#pauseplay");
var pausebutton = document.querySelector(".pausebutton");
var playbutton = document.querySelector(".playbutton");
var restart = false;
var press = false;

pauseplaybutton.addEventListener("click", () => {
  if(restart==true){
    document.querySelector(".restartbutton").style.overflow = "hidden";
    document.querySelector(".restartbutton").style.maxHeight = "0px";
    document.querySelector(".restartbutton").style.maxWidth = "0px";
    playbutton.style.overflow = "visible";
    playbutton.style.maxHeight = "35px";
    playbutton.style.opacity='1'
    playbutton.style.maxWidth = "35px";
    placards.style.left = "0vw";
    a[0].style.width = "47px";
    a[0].style.borderRadius = "20px";
    a[5].style.width = "10px";
    a[5].style.borderRadius = "50%";
    document.querySelector(".loading6").style.width = "0px";
    restart = false;
    play = true;
    counter = 1;
    
    animation = anime.timeline();

     //slide 2 transition to slide 3
    animation
      .add({
        targets: [".hd1", ".p1", ".p11"],
        translateX: [100, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
        began: function (anime) {
          counter = 1;
        },
        complete: function (anime) {
          pausetime = true;
        },
      })

      //slide1 transition to slide 2

      .add({
        opacity: [1, 0],
        targets: [".hd1", ".p1", ".p11"],
        translateX: -100,
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading1").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading1").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-83vw",

          complete: function (anim) {
            counter = 2;
            
              a[1].style.background = "rgb(174, 163, 163)";
              a[1].style.width = "47px";
              a[1].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },

          easing: "easeInQuad",
        },
        "-=600"
      )

      .add(
        {
          targets: [".hd2", ".p2"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd2", ".p2"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading2").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading2").style.width = "0px";
          }
        },
      })

      .add(
        {
          targets: placards,
          left: "-163vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 3;
         ;
              a[2].style.background = "rgb(174, 163, 163)";
              a[2].style.width = "47px";
              a[2].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=500"
      )

      //slide 3 anim
      .add(
        {
          targets: [".hd3", ".p3"],
          opacity: [0, 1],
          translateX: [100, 0],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 3 to slide 4
      .add({
        targets: [".hd3", ".p3"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading3").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading3").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-253vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 4;
          
              a[3].style.background = "rgb(174, 163, 163)";
              a[3].style.width = "47px";
              a[3].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: ".p4",
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 4 to slide5
      .add({
        targets: ".p4",
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
        },
        update: function (anime) {
          document.querySelector(".loading4").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading4").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-333vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 5;
            
              a[4].style.background = "rgb(174, 163, 163)";
              a[4].style.width = "47px";
              a[4].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
              a[5].style.width = "10px";
              a[5].style.borderRadius = "50%";
          
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd5", ".p5"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
            pausetime = true;
          },
        },
        "-=500"
      )
      //slide 5 to slide 6
      .add({
        targets: [".hd5", ".p5"],
        opacity: [1, 0],
        translateX: [0, -100],
        easing: "easeInExpo",
        delay: 1500,
        complete: function (anime) {
          pausetime = false;
          document.querySelector(".loading5").style.width = "0px";
        },
        update: function (anime) {
          document.querySelector(".loading5").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading5").style.width = "0px";
          }
        },
      })
      .add(
        {
          targets: placards,
          left: "-413vw",
          easing: "easeInQuad",
          complete: function (anim) {
            counter = 6;
            
              a[5].style.background = "rgb(174, 163, 163)";
              a[5].style.width = "47px";
              a[5].style.borderRadius = "20px";

              a[0].style.width = "10px";
              a[0].style.borderRadius = "50%";
              a[2].style.width = "10px";
              a[2].style.borderRadius = "50%";
              a[3].style.width = "10px";
              a[3].style.borderRadius = "50%";
              a[4].style.width = "10px";
              a[4].style.borderRadius = "50%";
              a[1].style.width = "10px";
              a[1].style.borderRadius = "50%";
            
          },
        },
        "-=700"
      )

      .add(
        {
          targets: [".hd6", ".p6"],
          translateX: [100, 0],
          opacity: [0, 1],
          easing: "easeInExpo",
          complete: function (anime) {
          
          },
        },
        "-=500"
      )
      .add({
        targets: [".hd6", ".p6"],
        opacity: [1, 1],
        translateX: [0, 0],
        easing: "easeInExpo",
        delay: 1500,
        update: function (anime) {
          pausetime = true;
          document.querySelector(".loading6").style.width =
            (Math.round(anime.progress) * 47) / 100 + "px";
          if (Math.round(anime.progress) == 100) {
            document.querySelector(".loading6").style.width = "0px";
            if (play == true) {
              restart = true;
              document.querySelector(".restartbutton").style.overflow =
                "visible";
              document.querySelector(".restartbutton").style.maxHeight = "35px";
              document.querySelector(".restartbutton").style.maxWidth = "35px";
              playbutton.style.overflow = "hidden";
              playbutton.style.maxHeight = "0px";

              playbutton.style.maxWidth = "0px";
            }
          }
        },
      });
    press = false;
  }
  else
  {
    if (press == true) {
      play = true;
      press = !press;
      anime({
        targets: ".playbutton",
        overflow: "visible",
        opacity: { value: ["0", "1"], duration: 2000, delay: 100 },
      });
      anime({
        targets: ".pausebutton",
        overflow: "hidden",
        opacity: { value: ["1", "0"], duration: 2000, delay: 100 },
      });
      playbutton.style.overflow = "visible";
      playbutton.style.maxHeight = "35px";
      playbutton.style.maxWidth = "35px";
      pausebutton.style.overflow = "hidden";
      pausebutton.style.maxHeight = "0px";
      pausebutton.style.maxWidth = "0px";
      document.querySelector(".restartbutton").style.overflow = "hidden";
      document.querySelector(".restartbutton").style.maxHeight = "0px";
      document.querySelector(".restartbutton").style.maxWidth = "0px";
    } else {
      if (pausetime == true) {
        play = false;
        press = !press;
        anime({
          targets: ".pausebutton",
          overflow: "visible",
          opacity: { value: ["0", "1"], duration: 2000, delay: 100 },
        });
        anime({
          targets: ".playbutton",
          overflow: "hidden",
          opacity: { value: ["1", "0"], duration: 2000, delay: 100 },
        });
        pausebutton.style.overflow = "visible";
        pausebutton.style.maxHeight = "35px";
        pausebutton.style.maxWidth = "35px";
        playbutton.style.overflow = "hidden";
        playbutton.style.maxHeight = "0px";
        playbutton.style.maxWidth = "0px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
      }
    }
  }
});


async function revealanimation() {
  var hd1cpy = document.querySelector(".hd1");
  var p1cpy = document.querySelector(".p1");
  var p11cpy = document.querySelector(".p11");
  var placards = document.querySelector(".flx_placards");

  var windowHeight = window.innerHeight;
  var revealtop = placards.getBoundingClientRect().top;

  var revealpoint = window.innerHeight / 1.35;

  if ((revealpoint > windowHeight - revealtop || revealtop < -560) && run) {
    pauseplaybutton.style.visibility = "hidden";
    a[0].style.visibility = "hidden";
    a[1].style.visibility = "hidden";
    a[2].style.visibility = "hidden";
    a[3].style.visibility = "hidden";
    a[4].style.visibility = "hidden";
    a[5].style.visibility = "hidden";

    run = false;
    document.querySelector(".buttons_pt2").classList.add("active_button3");

    setTimeout(async () => {
      document.querySelector(".buttons_pt2").style.visibility = "hidden";

      document.querySelector("#buttons_pt2").classList.remove("active_button3");
    }, 500);
  } else {
    if (revealpoint < windowHeight - revealtop && revealtop > -554 && !run) {
       if (!closing) {
        press = false;
        play = true;
        closing = true;
        playbutton.style.overflow = "visible";
        playbutton.style.maxHeight = "35px";
        playbutton.style.maxWidth = "35px";
        pausebutton.style.overflow = "hidden";
        pausebutton.style.maxHeight = "0px";
        pausebutton.style.maxWidth = "0px";
        document.querySelector(".restartbutton").style.overflow = "hidden";
        document.querySelector(".restartbutton").style.maxHeight = "0px";
        document.querySelector(".restartbutton").style.maxWidth = "0px";
        animation.play();
      }
      await setTimeout(() => {
        document.querySelector(".buttons_pt2").style.visibility = "visible";
        document.querySelector("#buttons_pt2").classList.add("active_button2");
      }, 0);

      await setTimeout(async () => {
        document
          .querySelector("#buttons_pt2")
          .classList.remove("active_button2");
      }, 1000);

      await setTimeout(() => {
        pauseplaybutton.style.visibility = "visible";
        document.querySelector(".buttons_pt2").style.visibility = "visible";

        a[0].style.visibility = "visible";
        a[1].style.visibility = "visible";
        a[2].style.visibility = "visible";
        a[3].style.visibility = "visible";
        a[4].style.visibility = "visible";
        a[5].style.visibility = "visible";
      }, 1200);

      run = true;
    } else {
      var windowHeight = window.innerHeight;
      var revealtop = placards.getBoundingClientRect().top;

      var revealpoint = window.innerHeight / 1.1;
      if (revealpoint * 1.45 > windowHeight - revealtop) {
        pauseplaybutton.style.position = "fixed";
        document.querySelector(".buttons_pt2").style.position = "fixed";
      }
      if (revealpoint * 1.45 < windowHeight - revealtop) {
        if (closing) {
          closing = false;
          play = false;
          press = true;
          pausebutton.style.overflow = "visible";
          pausebutton.style.maxHeight = "35px";
          pausebutton.style.maxWidth = "35px";
          playbutton.style.overflow = "hidden";
          playbutton.style.maxHeight = "0px";
          playbutton.style.maxWidth = "0px";
          document.querySelector(".restartbutton").style.overflow = "hidden";
          document.querySelector(".restartbutton").style.maxHeight = "0px";
          document.querySelector(".restartbutton").style.maxWidth = "0px";
          if (pausetime == true) {
            animation.pause();
          } else {
            setTimeout(() => {
              animation.pause();
            }, 600);
          }
        }
        document.querySelector(".buttons_pt2").style.position = "static";
        document.querySelector("#pauseplay").style.position = "static";
      }
    }
  }
  if (revealtop > 250 || -730 < revealtop < -554) {
    document.querySelector(".buttons_pt2").style.position = "static";
    document.querySelector(".buttons_pt2").style.visibility = "hidden";
    document.querySelector("#pauseplay").style.position = "static";
    document.querySelector("#pauseplay").style.visibility = "hidden";
    a[0].style.visibility = "hidden";
    a[1].style.visibility = "hidden";
    a[2].style.visibility = "hidden";
    a[3].style.visibility = "hidden";
    a[4].style.visibility = "hidden";
    a[5].style.visibility = "hidden";
  }
}

window.addEventListener("scroll", revealanimation);

var close = false;
function revealbuttons() {
  var pt2placard = document.querySelector(".pt2new1placard_flx");
  var windowHeight = window.innerHeight;
  var revealtop = pt2placard.getBoundingClientRect().top;

  var revealpoint = window.innerHeight / 1.35;

  if ((revealpoint > windowHeight - revealtop || revealtop < -570) && close) {
    close = false;
    document.querySelector(".buttons_phone").classList.add("active_button3");
    document.querySelector(".black").style.visibility = "hidden";
    document.querySelector(".white").style.visibility = "hidden";
    setTimeout(async () => {
      document.querySelector(".buttons_phone").style.visibility = "hidden";
      document.querySelector(".black").style.visibility = "hidden";
      document.querySelector(".white").style.visibility = "hidden";

      document
        .querySelector(".buttons_phone")
        .classList.remove("active_button3");
    }, 500);
  } else {
    if (revealpoint < windowHeight - revealtop && revealtop > -549 && !close) {
      close = true;
      document.querySelector(".buttons_phone").style.visibility = "visible";
      document.querySelector(".buttons_phone").classList.add("active_button4");
      document.querySelector(".black").style.visibility = "hidden";
      document.querySelector(".white").style.visibility = "hidden";

      setTimeout(() => {
        document
          .querySelector(".buttons_phone")
          .classList.remove("active_button4");
        document.querySelector(".black").style.visibility = "visible";
        document.querySelector(".white").style.visibility = "visible";
      }, 1000);
      setTimeout(() => {
        document.querySelector(".buttons_phone").style.visibility = "visible";
        document.querySelector(".black").style.visibility = "visible";
        document.querySelector(".white").style.visibility = "visible";
      }, 1200);
    } else {
      var windowHeight = window.innerHeight;
      var revealtop = pt2placard.getBoundingClientRect().top;
      var revealpoint = window.innerHeight / 1.1;
      if (revealpoint * 1.45 > windowHeight - revealtop) {
        document.querySelector(".buttons_phone").style.position = "fixed";
      }
      if (revealpoint * 1.45 < windowHeight - revealtop) {
        document.querySelector(".buttons_phone").style.position = "absolute";
      }
    }
  }
  if (revealtop > 200 || -730 < revealtop < -570) {
    document.querySelector(".buttons_phone").style.position = "static";
    document.querySelector(".buttons_phone").style.visibility = "hidden";
    document.querySelector(".black").style.visibility = "hidden";
    document.querySelector(".white").style.visibility = "hidden";
  }
}

window.addEventListener("scroll", revealbuttons);
