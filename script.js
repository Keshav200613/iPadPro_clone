var container=document.querySelector('.container').getBoundingClientRect().height
console.log(container)
function cont(){
var container=document.querySelector('.container').getBoundingClientRect().top

var bold=document.querySelector(".bold").getBoundingClientRect().bottom

    if(container>0){
        document.querySelector('#video4').style.position='absolute';
    document.querySelector('#video4').style.top='0px';

        document.querySelector(".textcont").style.position='absolute';
        document.querySelector(".textcont").style.top='50px';

    }
   else{
    document.querySelector('#video4').style.position='fixed';
    document.querySelector('#video4').style.top='0px';

    document.querySelector(".textcont").style.position='fixed';
    document.querySelector(".textcont").style.top='50px';
   }
   if(container<-innerHeight*1.3){
    document.querySelector('#video4').style.position='absolute';
    document.querySelector('#video4').style.top=`${innerHeight*1.3}px`;
    document.querySelector(".textcont").style.position='absolute'
    document.querySelector(".textcont").style.top=`${(innerHeight*1.3)+50}px`

   }
  }
  window.addEventListener('scroll',cont)
    const { innerHeight } = window;
    
    // zoom-out
    
    gsap.from("h1", {
        scale: 100 ,stagger: 0.25, duration: 0.1,
        scrollTrigger: {
            trigger: "#zoom-out",
            pin: true,
            
            end: `+=${innerHeight *1.3}`,
            scrub: 0.5
        }
    });
    var playingvid=true;
    document.querySelector(".textcont").addEventListener("click",()=>{

    {
        if(playingvid){
            playingvid=false;
            document.querySelector(".playbuttonvid2").style.visibility='hidden';
            document.querySelector(".playbuttonvid2").style.maxHeight='0';
            document.querySelector(".playbuttonvid2").style.maxWidth='0';
            document.querySelector(".pausebuttonvid2").style.visibility='visible';
            document.querySelector(".pausebuttonvid2").style.maxHeight='100%';
            document.querySelector(".pausebuttonvid2").style.maxWidth='100%';
            video4.pause();
        }
        else{
            playingvid=true;
            document.querySelector(".pausebuttonvid2").style.visibility='hidden';
            document.querySelector(".pausebuttonvid2").style.maxHeight='0';
            document.querySelector(".pausebuttonvid2").style.maxWidth='0';
            document.querySelector(".playbuttonvid2").style.visibility='visible';
            document.querySelector(".playbuttonvid2").style.maxHeight='100%';
            document.querySelector(".playbuttonvid2").style.maxWidth='100%';
            video4.play()
        }
    }})
    