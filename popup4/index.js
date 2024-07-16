var allelem = document.querySelector(".allshown");
var popup4 = document.querySelector(".mainflxboxpopup4");
function showpopup4() {
  function animpopup4() {
    anime({
      targets: allelem,
      filter: "blur(4px)",
      duration: 1300,
    });
    allelem.style.overflow = "hidden";
    popup2.style.display = "flex";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    anime({
      targets: popup4,
      opacity: [0, 1],
      translateY: ["+40%", "+5%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  setTimeout(animpopup4, 10);
}
function closepopup4() {
  function animpopup4_2() {
    anime({
      targets: popup4,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    popup4.style.display = "none";
    allelem.style.overflow = "visible";
    document.body.style.display = "block";
    document.body.style.justifyContent = "none";
    document.body.style.alignItems = "none";
    anime({
      targets: allelem,
      filter: ["blur(4px)", "blur(0px)"],
      duration: 1000,
    });
  }
  setTimeout(animpopup4_2, 10);
}

const slider = document.querySelector(".comp_pic .slider");
const beforeImage = document.querySelector(".comp_pic .comp_pic_cnt .rton");
const sliderLine = document.querySelector(
  ".comp_pic .comp_pic_cnt .slider-line",
);
const sliderIcon = document.querySelector(
  ".comp_pic .comp_pic_cnt .slider-icon",
);

slider.addEventListener("input", (e) => {
  let sliderValue = e.target.value + "%";
  beforeImage.style.width = sliderValue;
  sliderLine.style.left = sliderValue;
  sliderIcon.style.left = sliderValue;
});
