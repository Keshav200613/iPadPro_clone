var allelem = document.querySelector(".allshown");
var popup2 = document.querySelector(".mainflxboxpopup2");
function showpopup2() {
  function animpopup2() {
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
      targets: popup2,
      opacity: [0, 1],
      translateY: ["+40%", "+5%"],
      easing: "easeInQuad",
      duration: 1000,
    });
  }
  setTimeout(animpopup2, 10);
}
function closepopup2() {
  function animpopup2_2() {
    anime({
      targets: popup2,
      opacity: [1, 0],
      easing: "easeOutQuad",
      duration: 1000,
    });
    popup2.style.display = "none";
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
  setTimeout(animpopup2_2, 10);
}
