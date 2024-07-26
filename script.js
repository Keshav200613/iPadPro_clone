var container=document.querySelector('.container').getBoundingClientRect().height

    const { innerHeight } = window;
    
    // zoom-out
    
    gsap.from(".text", {
        scale: 100,stagger:0.1, duration: 0.1,
        scrollTrigger: {
            trigger: "#zoom-out",
            pin: ".container",
            start: "top top",
            end: `+=${innerHeight *1.2}`,
            scrub: 0.5
        },
        
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
    