var trackpad6=document.getElementById('trackpad-video')
var animevid6=false
function trackpad6vid(){
    var win=window.innerHeight
    var top=trackpad6.getBoundingClientRect().top
    var length1=250;
    if(top<win-length1 && !animevid6){
        animevid6=true
        trackpad6.play()
    }

}
document.querySelector(".playing6").addEventListener("click",()=>{
    document.querySelector(".playing6").classList.add('hidden');
    document.querySelector(".paused6").classList.remove('hidden');
    document.querySelector(".ended6").classList.add('hidden');
    trackpad6.pause()
})
document.querySelector(".paused6").addEventListener("click",()=>{
    document.querySelector(".paused6").classList.add('hidden');
    document.querySelector(".playing6").classList.remove('hidden');
    document.querySelector(".ended6").classList.add('hidden');
    trackpad6.play()
})
document.querySelector(".ended6").addEventListener("click",()=>{
    document.querySelector(".paused6").classList.add('hidden');
    document.querySelector(".playing6").classList.remove('hidden');
    document.querySelector(".ended6").classList.add('hidden');
    trackpad6.play()
})
trackpad6.onended=()=>{
    document.querySelector(".playing6").classList.add('hidden');
    document.querySelector(".ended6").classList.remove('hidden');
    
    document.querySelector(".paused6").classList.add('hidden');
}
var trackpad8=document.querySelector('.popup3pt2vid')
document.querySelector(".playing8").addEventListener("click",()=>{
    document.querySelector(".playing8").classList.add('hidden');
    document.querySelector(".paused8").classList.remove('hidden');
    document.querySelector(".ended8").classList.add('hidden');
    trackpad8.pause()
})
document.querySelector(".paused8").addEventListener("click",()=>{
    document.querySelector(".paused8").classList.add('hidden');
    document.querySelector(".playing8").classList.remove('hidden');
    document.querySelector(".ended8").classList.add('hidden');
    trackpad8.play()
})
document.querySelector(".ended8").addEventListener("click",()=>{
    document.querySelector(".paused8").classList.add('hidden');
    document.querySelector(".playing8").classList.remove('hidden');
    document.querySelector(".ended8").classList.add('hidden');
    trackpad8.play()
})
trackpad8.onended=()=>{
    document.querySelector(".playing8").classList.add('hidden');
    document.querySelector(".ended8").classList.remove('hidden');
    
    document.querySelector(".paused8").classList.add('hidden');
}
var trackpad9=document.querySelector('.popup3pt4vid')
document.querySelector(".playing9").addEventListener("click",()=>{
    document.querySelector(".playing9").classList.add('hidden');
    document.querySelector(".paused9").classList.remove('hidden');
    document.querySelector(".ended9").classList.add('hidden');
    trackpad9.pause()
})
document.querySelector(".paused9").addEventListener("click",()=>{
    document.querySelector(".paused9").classList.add('hidden');
    document.querySelector(".playing9").classList.remove('hidden');
    document.querySelector(".ended9").classList.add('hidden');
    trackpad9.play()
})
document.querySelector(".ended9").addEventListener("click",()=>{
    document.querySelector(".paused9").classList.add('hidden');
    document.querySelector(".playing9").classList.remove('hidden');
    document.querySelector(".ended9").classList.add('hidden');
    trackpad9.play()
})
trackpad9.onended=()=>{
    document.querySelector(".playing9").classList.add('hidden');
    document.querySelector(".ended9").classList.remove('hidden');
    
    document.querySelector(".paused9").classList.add('hidden');
}