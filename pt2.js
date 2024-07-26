var checked=false
var poprunning=false
window.addEventListener("scroll",()=>{
  if(document.querySelector(".price").getBoundingClientRect().top<50) document.querySelector(".nav2").classList.remove("hidden")
    else document.querySelector(".nav2").classList.add("hidden")
})

function openvideo() {
  var main_doc = document.querySelector(".allshown");
  document.body.style.overflowY="hidden"
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
  document.body.style.overflowY="visible"
  document.body.style.backgroundColor = "black";
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
  var placards = document.querySelector(".flx_placards");
  var windowHeight = window.innerHeight;
  var revealtop = placards.getBoundingClientRect().top;
  var revealpoint = 450;
  if (revealtop < windowHeight - revealpoint && !closing) {
    closing = true;
    animation.play();
  }
}

var play=true;

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
          left: "-1160px",

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
          left: "-2460px",
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
          left: "-3760px",
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
          left: "-5060px",
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
          left: "-6360px",
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
          left: "-2460px",
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
          left: "-3760px",
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
          left: "-5060px",
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
          left: "-6360px",
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
          left: "-3760px",
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
          left: "-5060px",
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
          left: "-6360px",
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
          left: "-5060px",
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
          left: "-6360px",
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
          left: "-6360px",
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
      placards.style.left = document.querySelector(".pt2_new1").getBoundingClientRect().left+"px";
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
      placards.style.left = "-1160px";
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
      placards.style.left = "-2460px";
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
      placards.style.left = "-3760px";
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
      placards.style.left = "-5060px";
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
      placards.style.left = "-6360px";
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
              left: "-1160px",

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
              left: "-2460px",
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
              left: "-3760px",
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
              left: "-5060px",
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
              left: "-6360px",
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
              left: "-2460px",
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
              left: "-3760px",
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
              left: "-5060px",
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
              left: "-6360px",
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
              left: "-3760px",
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
              left: "-5060px",
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
              left: "-6360px",
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
              left: "-5060px",
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
              left: "-6360px",
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
              left: "-6360px",
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
      left: "-1160px",

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
      left: ["-1160px", "-2460px"],
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
      left: ["-2460px", "-3760px"],
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
      left: ["-3760px", "-5060px"],
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
      left: ["-5060px", "-6360px"],
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
    placards.style.left = document.querySelector(".pt2_new1").getBoundingClientRect().left+"px";
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
          left: "-1160px",

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
          left: "-2460px",
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
          left: "-3760px",
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
          left: "-5060px",
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
          left: "-6360px",
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

var animationrunning0=true
function revealanimation() {

  var placards = document.querySelector(".flx_placards");

  var windowHeight = window.innerHeight;
  var revealtop = placards.getBoundingClientRect().top;
  var bottom1 = document.querySelector(".allbuttons").getBoundingClientRect().top;
  var popup1=document.querySelector(".buttons_pt2").getBoundingClientRect().top;
  var revealpoint = 450;
  

  if(revealtop-popup1>0) {document.querySelector(".buttons_pt2").style.opacity=0
    document.getElementById("pauseplay").classList.add("hidden")
  }
  if(bottom1-popup1<=0){ document.querySelector(".fixeddiv").style.position="static"
  }
  if(popup1>windowHeight-20) document.querySelector(".fixeddiv").style.position="fixed"
  if ((revealtop > windowHeight - revealpoint || bottom1 < 0) && !animationrunning0 && run) {
    animationrunning0 = true;
    
    anime0=false

    // animation.pause()
    var closinganime0=gsap.timeline({
      autoplay:true,
      autoAlpha:1,
    })
    closinganime0.to(".playbutton",{opacity:0},"<")
    closinganime0.to(".pausebutton",{opacity:0},"<")
    closinganime0.to(".restartbutton",{opacity:0},"<")
    closinganime0.to(".buttons_pt2",{width:"56px",duration:0.5,onStart:()=>{
      document.querySelector(".checkbuttons").classList.add("hidden")
    }},"-=0.1")
    closinganime0.to("#pauseplay",{x:20,duration:0.5,
    },"<")
    
    closinganime0.to(".buttons_pt2",{opacity:0,duration:0.3,
      onComplete:()=>{ anime0=true
        document.getElementById("pauseplay").classList.add("hidden")
        run=false
      }
    })
    // closinganime0.timeScale(3)
    poprunning=true
    // run = false;
  
  }
    

   else if (revealtop < windowHeight - revealpoint && !run) {
      // anime1=true
      if(play) animation.play()
      // animation.play()
        var tl=gsap.timeline(({
            autoplay:true,
            autoAlpha:1
        }))
        tl.fromTo(".buttons_pt2",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(".buttons_pt2",{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".buttons_pt2").classList.remove("hidden")
                document.getElementById("pauseplay").classList.remove("hidden")                  
            }
            
        });
        tl.to("#pauseplay",{
          x:250,duration:0.7,easing:"power1.in"
        })
        tl.to(".playbutton",{opacity:1},"<")
    tl.to(".pausebutton",{opacity:1},"<")
    tl.to(".restartbutton",{opacity:1},"<")
        tl.to(".buttons_pt2",{
            width:"216px",duration:0.7,easing:"power1.in",onComplete:()=>{
              // document.querySelector(".playpausecheck").classList.remove("hidden")
                   document.querySelector(".checkbuttons").classList.remove("hidden")
                   
                   animationrunning0=false
                   anime0=false
            }
        
        },"<")
        tl.timeScale(1.5)
    run=true
     
     } 

    
}

window.addEventListener("scroll", revealanimation);
var animationrunning1=true
var revealedpop1 = false;
function revealbuttons() {
  var anime1=false
  var pt2placard = document.querySelector(".pt2new1placard_flx");
  var windowHeight = window.innerHeight;
  var revealtop = pt2placard.getBoundingClientRect().top;
  var bottom = document.querySelector(".button_newflex").getBoundingClientRect().bottom;
  var popup=document.querySelector(".buttons_phone").getBoundingClientRect().bottom;
  var revealpoint = 600;
  if(revealtop-popup>0) document.querySelector(".buttons_phone").style.opacity=0
  if(bottom-popup<=0) document.querySelector(".buttons_phone").style.position="static"
  if(bottom>windowHeight-20) document.querySelector(".buttons_phone").style.position="fixed"
  if(revealtop<windowHeight-revealpoint && !revealedpop1 && !anime1)
    {anime1=true
      
        var tl=gsap.timeline(({
            autoplay:true,
            autoAlpha:1
        }))
        tl.fromTo(".buttons_phone",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(".buttons_phone",{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".buttons_phone").classList.remove("hidden")
            }
            
        });
        
        tl.to(".buttons_phone",{
            width:"98px",duration:0.7,easing:"power1.in",onComplete:()=>{
              
                    document.getElementById("black1").classList.remove("hidden")
                   document.getElementById("white1").classList.remove("hidden")                  
                   animationrunning1=false
                   anime1=false
            }
        
        })
        tl.timeScale(1.5)
    revealedpop1=true
}
  else if ((revealtop > windowHeight - revealpoint || bottom < 50) && !animationrunning1 && !anime1) {
    animationrunning1 = true;
    anime1=false
    
    var closinganime1=gsap.timeline({
      autoAlpha:1,
    })
    closinganime1.to(".buttons_phone",{width:"56px",duration:0.5,onStart:()=>{
      document.getElementById("white1").classList.add("hidden")
      document.getElementById("black1").classList.add("hidden")
    }})
    closinganime1.to(".buttons_phone",{opacity:0,duration:0.3,
      onComplete:()=>{ anime1=true
        revealedpop1=false
      }
    })
    closinganime1.timeScale(3)
  }
  else{
      if(revealtop < windowHeight - revealpoint && anime1) revealedpop1=false
  }
  
}

window.addEventListener("scroll", revealbuttons);
var allelem = document.querySelector(".allshown");
var popup3 = document.querySelector(".mainflxboxpopup3");

function showpopup3() { 
  function animpopup3() {
    anime({
      targets: popup3,
      opacity: [0, 1],
      translateY: ["-40%", "0%"],
      easing: "easeInQuad",
      duration: 1000,
    });
    document.body.style.overflowY="hidden"   
    document.querySelector("#scrollablediv3").style.visibility="visible";  
    

  }
  allelem.classList.add("blur1")
  setTimeout(animpopup3, 10);
}
function closepopup3() {
  document.getElementById("scrollablediv3").scrollTop=0;
  anime({
    targets: popup3,

    opacity: [1, 0],
    easing: "easeOutQuad",
    duration: 500,
  });
  
  setTimeout(()=>{allelem.classList.remove('blur1')
  },600)

  function animpopup3_2() {
    document.body.style.overflowY="visible"
    document.querySelector("#scrollablediv3").style.visibility="hidden";
  }

  setTimeout(animpopup3_2, 1000);
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
