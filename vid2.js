var trackpad7=document.getElementById('front-camera-video')
document.querySelector(".playing7").addEventListener("click",()=>{
    document.querySelector(".playing7").classList.add('hidden');
    document.querySelector(".paused7").classList.remove('hidden');
    document.querySelector(".ended7").classList.add('hidden');
    trackpad7.pause()
})
document.querySelector(".paused7").addEventListener("click",()=>{
    document.querySelector(".paused7").classList.add('hidden');
    document.querySelector(".playing7").classList.remove('hidden');
    document.querySelector(".ended7").classList.add('hidden');
    trackpad7.play()
})
document.querySelector(".ended7").addEventListener("click",()=>{
    document.querySelector(".paused7").classList.add('hidden');
    document.querySelector(".playing7").classList.remove('hidden');
    document.querySelector(".ended7").classList.add('hidden');
    trackpad7.play()
})
trackpad7.onended= ()=>{
    document.querySelector(".playing7").classList.add('hidden');
    document.querySelector(".ended7").classList.remove('hidden');
    
    document.querySelector(".paused7").classList.add('hidden');
}
var win =window.innerHeight
animevid7=false
function trackpad7vid(){
    var win=window.innerHeight
    var top=trackpad7.getBoundingClientRect().top
    var length2=250;
    if(top<win-length2 && !animevid7){
        animevid7=true
        trackpad7.play()
    }

}