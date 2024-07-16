var trackpad=document.getElementById('trackpad-video')
document.querySelector(".playing").addEventListener("click",()=>{
    document.querySelector(".playing").classList.add('hidden');
    document.querySelector(".paused").classList.remove('hidden');
    document.querySelector(".ended").classList.add('hidden');
    trackpad.pause()
})
document.querySelector(".paused").addEventListener("click",()=>{
    document.querySelector(".paused").classList.add('hidden');
    document.querySelector(".playing").classList.remove('hidden');
    document.querySelector(".ended").classList.add('hidden');
    trackpad.play()
})
document.querySelector(".ended").addEventListener("click",()=>{
    document.querySelector(".playing").classList.add('hidden');
    document.querySelector(".paused").classList.remove('hidden');
    document.querySelector(".ended").classList.add('hidden');
    trackpad.play()
})
trackpad.onended= ()=>{
    document.querySelector(".playing").classList.add('hidden');
    document.querySelector(".ended").classList.remove('hidden');
    
    document.querySelector(".paused").classList.add('hidden');
}