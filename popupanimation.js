var popupanime10=document.querySelector(".popup10showflx")
var popupanime9=document.querySelector(".popup9showflx")
var popupanime8=document.querySelector(".popup8showflx")
var popupanime7=document.querySelector(".popup7showflx")
var popupanime6=document.querySelector(".popup6showflx")
var popupanime5=document.querySelector(".popup5showflx")
var popupanime4=document.querySelector(".popup4showflx")
var popupanime3=document.querySelector(".popup3showflx")
var popupanime2=document.querySelector(".popup2showflx")
var popupanime11=document.querySelector(".popup11showflx")
var windowHeight21 = window.innerHeight;
var revealedpop10=false
var revealedpop9=false
var revealedpop9=false
var revealedpop8=false
var revealedpop7=false
var revealedpop6=false
var revealedpop5=false
var revealedpop4=false
var revealedpop3=false
var revealedpop2=false
var revealedpop11=false
var animationrunning10=true
var animationrunning11=true
var animationrunning9=true
var animationrunning8=true
var animationrunning7=true
var animationrunning6=true
var animationrunning5=true
var animationrunning4=true
var animationrunning3=true
var animationrunning2=true
function animationpopup10(){
    var revealpopup10=document.querySelector(".endbox1").getBoundingClientRect().top
    var revealpopup210=250
    var bottom=popupanime10.getBoundingClientRect().bottom
    if(revealpopup10<windowHeight21-revealpopup210 && !revealedpop10)
    {  
        var tl=gsap.timeline(({
            autoplay:true,
            
        }))
        tl.fromTo(".popup10showflx",{y:0,opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
          y:10, opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime10,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.out",onComplete:()=>{
                document.querySelector(".popup10show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime10,{
            x:-10,width:"256px",duration:0.3,onComplete:()=>{
                document.getElementById("itag10").classList.remove("hidden")
                   document.getElementById("hidtxt10").classList.remove("hidden")
                   animationrunning10=false
            }
        
        })
    revealedpop10=true
}
 else if((revealpopup10>windowHeight21-revealpopup210 || bottom<40) && !animationrunning10){
    animationrunning10=true
    visible=false
    var closinganime10=gsap.timeline()
    closinganime10.to(popupanime10,{width:"56px",transformOrigin:"-50%",duration:0.5,onStart:()=>{
        document.getElementById("itag10").classList.add("hidden")
        document.getElementById("hidtxt10").classList.add("hidden")
        document.querySelector(".popup10show").classList.add("hidden")
    },onComplete:()=>{revealedpop10=false
    }})
    closinganime10.to(popupanime10,{opacity:0,easing:"power1.in",duration:0.8})

 }
 
 
}
function animationpopup9(){
    var revealpopup09=document.querySelector(".connect").getBoundingClientRect().top
    var revealpopup209=250
    var bottom=popupanime9.getBoundingClientRect().bottom
    if(revealpopup09<windowHeight21-revealpopup209 && !revealedpop9 && animationrunning9)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup9showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime9,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup9show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime9,{
            width:"292px",duration:0.3,onComplete:()=>{
                document.getElementById("itag9").classList.remove("hidden")
                   document.getElementById("hidtxt9").classList.remove("hidden")
                   animationrunning9=false
            }
        
        })
    revealedpop9=true
}
 else if((revealpopup09>windowHeight21-revealpopup209|| bottom<40) && !animationrunning9 && revealedpop9){
    animationrunning9=true

    var closinganime9=gsap.timeline()
    closinganime9.to(popupanime9,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag9").classList.add("hidden")
        document.getElementById("hidtxt9").classList.add("hidden")
        document.querySelector(".popup9show").classList.add("hidden")
    },onComplete:()=>{revealedpop9=false
    }})
    closinganime9.to(popupanime9,{opacity:0,duration:0.5})
}
}
function animationpopup7(){
    var revealpopup07=document.querySelector(".keyboard").getBoundingClientRect().top
    var revealpopup207=400
    var bottom=popupanime7.getBoundingClientRect().bottom
    if(revealpopup07<windowHeight21-revealpopup207 && !revealedpop7 && animationrunning7)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup7showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime7,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup7show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime7,{
            width:"357px",duration:0.3,onComplete:()=>{
                document.getElementById("itag7").classList.remove("hidden")
                   document.getElementById("hidtxt7").classList.remove("hidden")
                   animationrunning7=false
            }
        
        })
    revealedpop7=true
}
 else if((revealpopup07>windowHeight21-revealpopup207 || bottom<40) && !animationrunning7 && revealedpop7){
    animationrunning7=true
    var closinganime7=gsap.timeline()
    closinganime7.to(popupanime7,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag7").classList.add("hidden")
        document.getElementById("hidtxt7").classList.add("hidden")
        document.querySelector(".popup7show").classList.add("hidden")
    },onComplete:()=>{revealedpop7=false
    }})
    closinganime7.to(popupanime7,{opacity:0,duration:0.5})
}
}
function animationpopup6(){
    var revealpopup06=document.querySelector(".pencil").getBoundingClientRect().top
    var revealpopup206=400
    var bottom=popupanime6.getBoundingClientRect().bottom
    if(revealpopup06<windowHeight21-revealpopup206 && !revealedpop6 && animationpopup6)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup6showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime6,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup6show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime6,{
            width:"338px",duration:0.3,onComplete:()=>{
                document.getElementById("itag6").classList.remove("hidden")
                   document.getElementById("hidtxt6").classList.remove("hidden")
                   animationrunning6=false
            }
        
        })
    revealedpop6=true
}
 else if((revealpopup06>windowHeight21-revealpopup206 || bottom<40) && !animationrunning6 && revealedpop6){
    animationrunning6=true
    var closinganime6=gsap.timeline()
    closinganime6.to(popupanime6,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag6").classList.add("hidden")
        document.getElementById("hidtxt6").classList.add("hidden")
        document.querySelector(".popup6show").classList.add("hidden")
    },onComplete:()=>{revealedpop6=false
    }})
    closinganime6.to(popupanime6,{opacity:0,duration:0.5})
}
}
function animationpopup5(){
    var revealpopup05=document.querySelector(".OS").getBoundingClientRect().top
    var revealpopup205=400
    var bottom=popupanime5.getBoundingClientRect().bottom
    if(revealpopup05<windowHeight21-revealpopup205 && !revealedpop5 && animationrunning5)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup5showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime5,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup5show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime5,{
            width:"350px",duration:0.3,onComplete:()=>{
                document.getElementById("itag5").classList.remove("hidden")
                   document.getElementById("hidtxt5").classList.remove("hidden")
                   animationrunning5=false
            }
        
        })
    revealedpop5=true
}
 else if((revealpopup05>windowHeight21-revealpopup205 ||bottom<40) && !animationrunning5 && revealedpop5){
    animationrunning5=true
    var closinganime5=gsap.timeline()
    closinganime5.to(popupanime5,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag5").classList.add("hidden")
        document.getElementById("hidtxt5").classList.add("hidden")
        document.querySelector(".popup5show").classList.add("hidden")
    },onComplete:()=>{revealedpop5=false
    }})
    closinganime5.to(popupanime5,{opacity:0,duration:0.5})
}
}
function animationpopup4(){
    var revealpopup04=document.querySelector(".container").getBoundingClientRect().top
    var revealpopup204=1000
    var bottom=popupanime4.getBoundingClientRect().bottom
    if(revealpopup04<windowHeight21-revealpopup204 && !revealedpop4 && animationrunning4)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup4showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime4,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup4show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime4,{
            width:"376px",duration:0.3,onComplete:()=>{
                document.getElementById("itag4").classList.remove("hidden")
                   document.getElementById("hidtxt4").classList.remove("hidden")
                   animationrunning4=false
            }
        
        })
    revealedpop4=true
}
 else if((revealpopup04>windowHeight21-revealpopup204 || bottom<40) && !animationrunning4 && revealedpop4){
    animationrunning4=true
    var closinganime4=gsap.timeline()
    closinganime4.to(popupanime4,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag4").classList.add("hidden")
        document.getElementById("hidtxt4").classList.add("hidden")
        document.querySelector(".popup4show").classList.add("hidden")
    },onComplete:()=>{revealedpop4=false
    }})
    closinganime4.to(popupanime4,{opacity:0,duration:0.5})
}
}
function animationpopup3(){
    var revealpopup03=document.querySelector(".pt3hd2__").getBoundingClientRect().top
    var revealpopup203=600
    var bottom=popupanime3.getBoundingClientRect().bottom
    if(revealpopup03<windowHeight21-revealpopup203 && !revealedpop3 && animationpopup3)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup3showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime3,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup3show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime3,{
            width:"388px",duration:0.3,onComplete:()=>{
                document.getElementById("itag3").classList.remove("hidden")
                   document.getElementById("hidtxt3").classList.remove("hidden")
                   animationrunning3=false
            }
        
        })
    revealedpop3=true
}
 else if((revealpopup03>windowHeight21-revealpopup203 || bottom<40) && !animationrunning3 && revealedpop3){
    animationrunning3=true
    var closinganime3=gsap.timeline()
    closinganime3.to(popupanime3,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag3").classList.add("hidden")
        document.getElementById("hidtxt3").classList.add("hidden")
        document.querySelector(".popup3show").classList.add("hidden")
    },onComplete:()=>{revealedpop3=false
    }})
    closinganime3.to(popupanime3,{opacity:0,duration:0.5})
}
}
function animationpopup2(){
    var revealpopup02=document.querySelector(".pt3hd1__").getBoundingClientRect().top
    var revealpopup202=400
    var bottom=popupanime2.getBoundingClientRect().bottom
    if(revealpopup02<windowHeight21-revealpopup202 && !revealedpop2 && animationpopup2)
    {   
    
        var tl=gsap.timeline(({
            autoplay:true,
        }))
        tl.fromTo(".popup2showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime2,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup2show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime2,{
            width:"332px",duration:0.3,onComplete:()=>{
                document.getElementById("itag2").classList.remove("hidden")
                   document.getElementById("hidtxt2").classList.remove("hidden")
                   animationrunning2=false
            }
        
        })
    revealedpop2=true
}
 else if((revealpopup02>windowHeight21-revealpopup202 || bottom<40) && !animationrunning2 && revealedpop2){
    animationrunning2=true

    
    var closinganime2=gsap.timeline()
    closinganime2.to(popupanime2,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag2").classList.add("hidden")
        document.getElementById("hidtxt2").classList.add("hidden")
        document.querySelector(".popup2show").classList.add("hidden")
    },onComplete:()=>{revealedpop2=false
    }})
    closinganime2.to(popupanime2,{opacity:0,duration:0.5})
}
}
function animationpopup11(){
    var revealpopup011=document.querySelector(".bighd").getBoundingClientRect().top
    var revealpopup211=600
    var bottom=popupanime11.getBoundingClientRect().bottom
    if(revealpopup011<windowHeight21-revealpopup211 && !revealedpop11 && animationrunning11)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup11showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime11,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup11show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime11,{
            width:"288px",duration:0.3,onComplete:()=>{
                document.getElementById("itag11").classList.remove("hidden")
                   document.getElementById("hidtxt11").classList.remove("hidden")
                   animationrunning11=false
            }
        
        })
    revealedpop11=true
}
 else if((revealpopup011>windowHeight21-revealpopup211 || bottom<40) && !animationrunning11 && revealedpop11){
    animationrunning11=true
    
    
    var closinganime11=gsap.timeline()
    closinganime11.to(popupanime11,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag11").classList.add("hidden")
        document.getElementById("hidtxt11").classList.add("hidden")
        document.querySelector(".popup11show").classList.add("hidden")
    },onComplete:()=>{revealedpop11=false
    }})
    closinganime11.to(popupanime11,{opacity:0,duration:0.5})
}
}
function animationpopup8(){
    var revealpopup08=document.querySelector(".recording").getBoundingClientRect().top
    var revealpopup208=400
    var bottom=popupanime8.getBoundingClientRect().bottom
    if(revealpopup08<windowHeight21-revealpopup208 && !revealedpop8 && animationpopup8)
    {
    
        var tl=gsap.timeline(({
            autoplay:true
        }))
        tl.fromTo(".popup8showflx",{opacity:0,width:"56px",outline:"0px solid rgb(0, 113, 227)"} ,{
           opacity:1,outline:"20px solid rgb(0, 113, 227)", duration: 0.5,easing:"power1.out"
           
        });
        tl.to(popupanime8,{
            outline:"0 solid rgb(0, 113, 227)",duration:0.3,easing:"power1.in",onComplete:()=>{
                document.querySelector(".popup8show").classList.remove("hidden")
            }
            
        });
        
        tl.to(popupanime8,{
            width:"307px",duration:0.3,onComplete:()=>{
                document.getElementById("itag8").classList.remove("hidden")
                   document.getElementById("hidtxt8").classList.remove("hidden")
                   animationrunning8=false
            }
        
        })
    revealedpop8=true
}
 else if((revealpopup08>windowHeight21-revealpopup208 || bottom<40) && !animationrunning8 && revealedpop8){
    animationrunning8=true
    var closinganime8=gsap.timeline()
    closinganime8.to(popupanime8,{width:"56px",duration:0.5,onStart:()=>{
        document.getElementById("itag8").classList.add("hidden")
        document.getElementById("hidtxt8").classList.add("hidden")
        document.querySelector(".popup8show").classList.add("hidden")
    },onComplete:()=>{revealedpop8=false
    }})
    closinganime8.to(popupanime8,{opacity:0,duration:0.5})
}
}
window.addEventListener("scroll",animationpopup10)
window.addEventListener("scroll",animationpopup11)
window.addEventListener("scroll",animationpopup2)
window.addEventListener("scroll",animationpopup3)
window.addEventListener("scroll",animationpopup4)
window.addEventListener("scroll",animationpopup5)
window.addEventListener("scroll",animationpopup6)
window.addEventListener("scroll",animationpopup7)
window.addEventListener("scroll",animationpopup8)
window.addEventListener("scroll",animationpopup9)
// gsap.registerpl


// tl.from("#hidtxt",{
//     opacity:0,duration:1,
// })
// gsap.from(".popup10showflx", {
//    width:"256px", duration: 1,delay:2,
    

// })
