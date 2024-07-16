let txt = document.querySelector('.head1');
txt.innerHTML = txt.innerText.split("").map(function(char) {
    return "<span>" + char + "</span>";
}).join("");


anime.timeline().add({
    targets: '.head1 span',
    easing: 'easeOutExpo',
    opacity: [1, 0],
    duration: 500,
    delay: (el, i) => 800 + 40 * i
});


var hd1 = document.querySelector(".head2");
var hd2 = document.querySelector(".head3");

anime({
    targets: hd1,
    easing: 'easeInExpo',
    opacity: [0, 1],
    delay: 5000
});
anime({
    targets: hd2,
    easing: 'easeInExpo',
    opacity: [0, 1],
    delay: 5000
});

anime({
    targets: '.price',
    easing: 'easeInExpo',
    opacity: [0, 1],
    delay: 5500
});
anime({
    targets: '.buy_btn',
    easing: 'easeInExpo',
    opacity: [0, 1],
    delay: 5500
});