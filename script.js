 var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  blur.style.left = dets.x -100+ "px"
  blur.style.top = dets.y-100 + "px"
})
var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid white";
    crsr.style.backgroundColor = "transparent"; 
  });
  elem.addEventListener("mouseleave", function() {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E"; 
  });
});



gsap.to(".nav",{
  backgroundColor: "#000",
  duration:0.5,
  height: "110px",
  scrollTrigger:{
    trigger:".nav",
    scroll: "body",
    // markers: "true",
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  }
})

gsap.to(".main",{
  backgroundColor: "#000",
  scrollTrigger:{
    trigger: ".main",
    scroll: "body",
    // markers: "true",
    start: "top -25%",
    end: "top -70%",
    scrub:2,
  }
})
gsap.from(".about-us img,.about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".about-us",
    scroll: "body",
    // markers: "true",
    start: "top 70%",
    end: "top 65%",
    scrub: 2
  }
})
gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".card",
    scroller: "body",
    // markers: "true",
    start: "top 70%",
    end: "top 65%",
    scrub: 1
  }
})
gsap.from(".clone1",{
  x:-70,
  y:-70,
  scrollTrigger:{
    trigger:".clone1",
    scroller: "body",
    // markers: "true",
    start: "top 50%",
    end: "top 47%",
    scrub: 2
  }
})
gsap.from(".clone2",{
  x:70,
  y:70,
  scrollTrigger:{
    trigger:".clone1",
    scroller: "body",
    start: "top 50%",
    end: "top 47%",
    scrub: 2
  }
})
gsap.from(".page4 h1",{
  y:35,
  scrollTrigger:{
    trigger:".page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 2
  }
})
