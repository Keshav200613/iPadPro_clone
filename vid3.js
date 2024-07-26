var trackpad1=document.getElementById('pencil-pro-feature-1')
document.querySelector(".playing1").addEventListener("click",()=>{
    document.querySelector(".playing1").classList.add('hidden');
    document.querySelector(".paused1").classList.remove('hidden');
    document.querySelector(".ended1").classList.add('hidden');
    trackpad1.pause()
})
document.querySelector(".paused1").addEventListener("click",()=>{
    document.querySelector(".paused1").classList.add('hidden');
    document.querySelector(".playing1").classList.remove('hidden');
    document.querySelector(".ended1").classList.add('hidden');
    trackpad1.play()
})
document.querySelector(".ended1").addEventListener("click",()=>{
    document.querySelector(".paused1").classList.add('hidden');
    document.querySelector(".playing1").classList.remove('hidden');
    document.querySelector(".ended1").classList.add('hidden');
    trackpad1.play()
})
trackpad1.onended= ()=>{
    document.querySelector(".playing1").classList.add('hidden');
    document.querySelector(".ended1").classList.remove('hidden');
    
    document.querySelector(".paused1").classList.add('hidden');
}
var trackpad2=document.getElementById('pencil-pro-feature-2')
document.querySelector(".playing2").addEventListener("click",()=>{
    document.querySelector(".playing2").classList.add('hidden');
    document.querySelector(".paused2").classList.remove('hidden');
    document.querySelector(".ended2").classList.add('hidden');
    trackpad2.pause()
})
document.querySelector(".paused2").addEventListener("click",()=>{
    document.querySelector(".paused2").classList.add('hidden');
    document.querySelector(".playing2").classList.remove('hidden');
    document.querySelector(".ended2").classList.add('hidden');
    trackpad2.play()
})
document.querySelector(".ended2").addEventListener("click",()=>{
    document.querySelector(".paused2").classList.add('hidden');
    document.querySelector(".playing2").classList.remove('hidden');
    document.querySelector(".ended2").classList.add('hidden');
    trackpad2.play()
})
trackpad2.onended= ()=>{
    document.querySelector(".playing2").classList.add('hidden');
    document.querySelector(".ended2").classList.remove('hidden');
    
    document.querySelector(".paused2").classList.add('hidden');
}
var trackpad3=document.getElementById('pencil-pro-feature-3')
document.querySelector(".playing3").addEventListener("click",()=>{
    document.querySelector(".playing3").classList.add('hidden');
    document.querySelector(".paused3").classList.remove('hidden');
    document.querySelector(".ended3").classList.add('hidden');
    trackpad3.pause()
})
document.querySelector(".paused3").addEventListener("click",()=>{
    document.querySelector(".paused3").classList.add('hidden');
    document.querySelector(".playing3").classList.remove('hidden');
    document.querySelector(".ended3").classList.add('hidden');
    trackpad3.play()
})
document.querySelector(".ended3").addEventListener("click",()=>{
    document.querySelector(".paused3").classList.add('hidden');
    document.querySelector(".playing3").classList.remove('hidden');
    document.querySelector(".ended3").classList.add('hidden');
    trackpad3.play()
})
trackpad3.onended= ()=>{
    document.querySelector(".playing3").classList.add('hidden');
    document.querySelector(".ended3").classList.remove('hidden');
    
    document.querySelector(".paused3").classList.add('hidden');
}
var trackpad4=document.getElementById('pencil-pro-feature-4')
document.querySelector(".playing4").addEventListener("click",()=>{
    document.querySelector(".playing4").classList.add('hidden');
    document.querySelector(".paused4").classList.remove('hidden');
    document.querySelector(".ended4").classList.add('hidden');
    trackpad4.pause()
})
document.querySelector(".paused4").addEventListener("click",()=>{
    document.querySelector(".paused4").classList.add('hidden');
    document.querySelector(".playing4").classList.remove('hidden');
    document.querySelector(".ended4").classList.add('hidden');
    trackpad4.play()
})
document.querySelector(".ended4").addEventListener("click",()=>{
    document.querySelector(".paused4").classList.add('hidden');
    document.querySelector(".playing4").classList.remove('hidden');
    document.querySelector(".ended4").classList.add('hidden');
    trackpad4.play()
})
trackpad4.onended= ()=>{
    document.querySelector(".playing4").classList.add('hidden');
    document.querySelector(".ended4").classList.remove('hidden');
    
    document.querySelector(".paused4").classList.add('hidden');
}
var trackpad5=document.getElementById('pencil-pro-squeeze')
document.querySelector(".playing5").addEventListener("click",()=>{
    document.querySelector(".playing5").classList.add('hidden');
    document.querySelector(".paused5").classList.remove('hidden');
    document.querySelector(".ended5").classList.add('hidden');
    trackpad5.pause()
})
document.querySelector(".paused5").addEventListener("click",()=>{
    document.querySelector(".paused5").classList.add('hidden');
    document.querySelector(".playing5").classList.remove('hidden');
    document.querySelector(".ended5").classList.add('hidden');
    trackpad5.play()
})
document.querySelector(".ended5").addEventListener("click",()=>{
    document.querySelector(".paused5").classList.add('hidden');
    document.querySelector(".playing5").classList.remove('hidden');
    document.querySelector(".ended5").classList.add('hidden');
    trackpad5.play()
})
trackpad5.onended= ()=>{
    document.querySelector(".playing5").classList.add('hidden');
    document.querySelector(".ended5").classList.remove('hidden');
    
    document.querySelector(".paused5").classList.add('hidden');
}
var win =window.innerHeight
animevid5=false
function trackpad5vid(){
    var win=window.innerHeight
    var top=trackpad5.getBoundingClientRect().top
    var length3=250;
    if(top<win-length3 && !animevid5){
        animevid5=true
        trackpad5.play()
    }

}