window.addEventListener("mousemove", (e) => {
    var box = document.querySelector(".box");
  var xValue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    250 + box.getBoundingClientRect().width / 2,
    window.innerWidth - (250 + box.getBoundingClientRect().width / 2),
    e.clientX
  );

  gsap.to(".box", {
    left: xValue,
    ease: Power3,
  });
});
