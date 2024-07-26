
document.querySelector("#popupbutton1").addEventListener("click",()=>{
    document.querySelector(".width1").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width1").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky1").addEventListener("click",()=>{
    document.querySelector(".width1").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    if(posn2==1) leftclick2()

})

document.querySelector("#popupbutton2").addEventListener("click",()=>{
    document.querySelector(".width2").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width2").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky2").addEventListener("click",()=>{
    document.querySelector(".width2").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    if(posn2==2) leftclick2()
    if(posn2==0) rightclick2()
})
document.querySelector("#popupbutton3").addEventListener("click",()=>{
    document.querySelector(".width3").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width3").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky3").addEventListener("click",()=>{
    document.querySelector(".width3").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    if(posn2==3) leftclick2()
    else{
      posn2set=-790+"px"
      posn2=2
      anime({
        targets: ".endplacards",
        left: posn2set,
        easing: "easeInQuad",
        duration: 400,
        update:function(){ 
            anime({
              targets: btn12,
              opacity: 1,
              duration: 200,
              delay: 600,
            });
            btn12.style.cursor = "pointer";
          }       
      });
    }
    
})
document.querySelector("#popupbutton4").addEventListener("click",()=>{
   document.body.style.overflowY="hidden"
   document.querySelector(".width4").style.opacity="1";
   document.querySelector("#scrollablediv").style.visibility="visible";  
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky4").addEventListener("click",()=>{
    document.body.style.overflowY="visible"
    document.getElementById("scrollablediv").scrollTop=0
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    document.querySelector("#scrollablediv").style.visibility="hidden";
    if(posn2==4) leftclick2()
    else{
        posn2set=-1185+"px"
        posn2=3
        anime({
        targets: ".endplacards",
        left: posn2set,
    easing: "easeInQuad",
    duration: 400,
    update:function(){ 
        anime({
          targets: btn12,
          opacity: 1,
          duration: 200,
          delay: 600,
        });
        btn12.style.cursor = "pointer";
      }       
  });
  }
})
document.querySelector("#popupbutton5").addEventListener("click",()=>{
    document.querySelector(".width5").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width5").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky5").addEventListener("click",()=>{
    document.querySelector(".width5").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    if(posn2==5) leftclick2()
    else{
      posn2set=-1580+"px";
      posn2=4;
      anime({
        targets: ".endplacards",
        left: posn2set,
        easing: "easeInQuad",
        duration: 400,
        update:function(){ 
            anime({
              targets: btn12,
              opacity: 1,
              duration: 200,
              delay: 600,
            });
            btn12.style.cursor = "pointer";
          }       
      });
  }
})
document.querySelector("#popupbutton6").addEventListener("click",()=>{
    document.querySelector(".width6").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width6").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky6").addEventListener("click",()=>{
    document.querySelector(".width6").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    posn2set=-1870+"px";
      posn2=5;
      anime({
        targets: ".endplacards",
        left: posn2set,
        easing: "easeInQuad",
        duration: 400,
        update:function(){ 
          anime({
            targets: btn22,
            opacity: [1, 0.2],
            duration: 200,
            delay: 1000,
            
          });
          btn22.style.cursor = "default";
            anime({
              targets: btn12,
              opacity: 1,
              duration: 200,
              delay: 600,
            });
            btn12.style.cursor = "pointer";
          }       
      });
})
document.querySelector("#popupbutton7").addEventListener("click",()=>{
    document.querySelector(".width7").style.visibility="visible";
   document.body.style.overflowY="hidden"
   document.querySelector(".width7").style.opacity="1";
   document.querySelector(".allshown").style.opacity="0.6"
   document.querySelector(".nav2").style.opacity="0.6"
   
})
document.querySelector(".sticky7").addEventListener("click",()=>{
    document.querySelector(".width7").style.visibility="hidden";
    document.body.style.overflowY="visible"
    document.querySelector(".allshown").style.opacity="1"
    document.querySelector(".nav2").style.opacity="1"
    posn2set=-1870+"px";
      posn2=5;
      anime({
        targets: ".endplacards",
        left: posn2set,
        easing: "easeInQuad",
        duration: 400,
        update:function(){ 
          anime({
            targets: btn22,
            opacity: [1, 0.2],
            duration: 200,
            delay: 1000,
            
          });
          btn22.style.cursor = "default";
            anime({
              targets: btn12,
              opacity: 1,
              duration: 200,
              delay: 600,
            });
            btn12.style.cursor = "pointer";
          }       
      });
})
document.querySelector("#popupbutton8").addEventListener("click",()=>{
    document.body.style.overflowY="hidden"
    document.querySelector(".width8").style.opacity="1";
    document.querySelector("#scrollablediv2").style.visibility="visible";  
    document.querySelector(".allshown").style.opacity="0.6"
    document.querySelector(".nav2").style.opacity="0.6"
    
 })
 document.querySelector(".sticky8").addEventListener("click",()=>{
     document.body.style.overflowY="visible"
    document.getElementById("scrollablediv2").scrollTop=0
     document.querySelector(".allshown").style.opacity="1"
     document.querySelector(".nav2").style.opacity="1"
     document.querySelector("#scrollablediv2").style.visibility="hidden";
     posn2set=-1870+"px";
      posn2=5;
      anime({
        targets: ".endplacards",
        left: posn2set,
        easing: "easeInQuad",
        duration: 400,
        update:function(){ 
          anime({
            targets: btn22,
            opacity: [1, 0.2],
            duration: 200,
            delay: 1000,
            
          });
          btn22.style.cursor = "default";
            anime({
              targets: btn12,
              opacity: 1,
              duration: 200,
              delay: 600,
            });
            btn12.style.cursor = "pointer";
          }       
      });
 })


var posn2 = 0;
var btn12 = document.querySelector(".flex_btns_left2");
var btn22 = document.querySelector(".flex_btns_right2");
var winwidth = window.innerWidth;
let animationRunning = false;
async function leftclick2() {
  if(!animationRunning)
  {animationRunning = true;
  if (posn2 <= 5 && posn2 != 0) {
    var change2 = false;
    var change = false;
    var posn2set = "+=395px";
    if (posn2 == 5) {
      posn2set = "+=290px";
      change2 = true;
      posn2--;
    } else if (posn2 == 4) {
      posn2set = "+=395px";
      posn2--;
    } else if (posn2 == 3) {
      posn2set = "+=395px";
      posn2--;
    } else if (posn2 == 2) {
      posn2set = "+=395px";
      posn2--;
    } else if (posn2 == 1) {
      posn2set = "+=395px";
      posn2--;
      change = true;
    }
   anime({
      targets: ".endplacards",
      left: posn2set,
      easing: "easeInQuad",
      duration: 400,
      update:function(){
        if (change) {
          anime({
            targets: btn12,
            opacity: [1, 0.2],
            duration: 200,
            delay: 600,
          });
          btn12.style.cursor = "default";
        } else if (change2) {
          anime({
            targets: btn22,
            opacity: [0.2, 1],
            duration: 200,
            delay: 600,
          });
          btn22.style.cursor = "pointer";
        }
      }
    });
  }
  setTimeout(()=>{animationRunning=false},500)}
}
async function rightclick2() {
  if(!animationRunning)
  {animationRunning=true
    if (posn2 >= 0 && posn2 != 5) {
    
    var change2 = false;
    var change = false;
    var posn2set = "-=395px";
    if (posn2 == 0) {
      posn2set = "-=395px";
      change2 = true;
      posn2++;
    } else if (posn2 == 4) {
      posn2set = "-=290px";
      change = true;
      posn2++;
    } else if (posn2 == 3) {
      posn2set = "-=395px";
      posn2++;
    } else if (posn2 == 2) {
      posn2set = "-=395px";
      posn2++;
    } else if (posn2 == 1) {
      posn2set = "-=395px";
      posn2++;
    }
    anime({
      targets: ".endplacards",
      left: posn2set,
      easing: "easeInQuad",
      duration: 400,
      update: function(){
        if (change) {
          anime({
            targets: btn22,
            opacity: [1, 0.2],
            duration: 200,
            delay: 1000,
            
          });
          btn22.style.cursor = "default";
        } else if (change2) {
          anime({
            targets: btn12,
            opacity: [0.2, 1],
            duration: 200,
            delay: 1000,
          });
          btn12.style.cursor = "pointer";
        }
        
      }
    });
  }
  setTimeout(()=>{animationRunning=false},500)
  }
}

btn12.addEventListener("click",()=>{ 
    leftclick2()
});
btn22.addEventListener("click",()=>{
  rightclick2()
});

