(function init() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  })();


//   navbar scrolling

  document.addEventListener("wheel", function(dets){
    if(dets.offsetY > 500){
    if(dets.deltaY > 0){
        gsap.to("#nav",{
            top:"-165px",
          backgroundColor:"white",
          borderBottom : "1px solid dimgray",
            duration:0.4 
        })
    }
}
    if(dets.deltaY < 0){
        gsap.to("#nav",{
            top:"0px",
            duration:0.4,
            backgroundColor:"transparent",
            borderBottom : "1px solid transparent",
            delay:0.6
        })
    }
})

gsap.to("#nav svg",{
    top:"70%",
    stagger:0.1,
transform:`translate(-50%,-50%) scale(0.60)`,
scrollTrigger:{
    trigger:"#nav svg",
    scroller:"#main",
start:"top 5%",
end:"top -6%",
scrub:2
// markers:true
}
})


var a = document.querySelector("#l1")
var b = document.querySelector("#l2")
var c = document.querySelector("#l3")
var flag = 0
b.addEventListener("click",function(){
   if(flag==0){
    a.style.transform = " rotate(45deg) translateY(7px) translateX(-5px)"
    b.style.opacity ="0"
    c.style.transform = " rotate(-45deg) translateY(-16px) translateX(3px)"
    flag =1
   }
   else{
    a.style.transform = " rotate(0deg) translateY(0px) translateX(0px)"
    b.style.opacity ="1"
    c.style.transform = " rotate(0deg) translateY(0px) translateX(0px)"
    flag = 0
}
})


// gsap
var tl=gsap.timeline()
tl.from("#page1 h1,h2",{
    y:-40,
    opacity:0,
    delay:0.4,
    duration:0.9,
})
.from("#page1 img",{
    scale:0.5,
    borderRadius:"10px",
    duration:0.6,
})
.from("#nav ",{
    y:-50,
    opacity:0,
    duration:0.6
    
})

// this is a page3 part
var h2Data = document.querySelectorAll("#page2 h2");
   h2Data.forEach(function(elem){

  var textData = elem.textContent

  var splitedText = textData.split("")
  var clutter = ""

  splitedText.forEach(function(e) {
    clutter += `<span>${e}</span>`
  })

elem.innerHTML = clutter
})

gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#page2 h2 span",
        scroller:"#main",
        start:"top 67%",
        end:"top 5%",
        scrub:1
    }

})

gsap.to("#page2 #svg2,#page2 #svg3",{
    x:"-95vw",
    scrollTrigger:{
        trigger:"#page2 #svg2",
        scroller:"#main",
        scrub:1
        // markers:true
     
    }
})

// this is a page3 part

var h1Data = document.querySelectorAll("#page3 h1");
   h1Data.forEach(function(elem){

  var textData = elem.textContent

  var splitedText = textData.split("")
  var clutter = ""

  splitedText.forEach(function(e) {
    clutter += `<span>${e}</span>`
  })

elem.innerHTML = clutter
})

gsap.to("#page3 h1 span",{
    color:"#434B33",
    stagger:0.2,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#page3 h1 span",
        scroller:"#main",
        start:"top 57%",
        end:"top 5%",
        scrub:1
    }
})

// page4 scroll


gsap.from(" #p3c-left h1",{
    y:"55%",
      opacity:0,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p3c-left ",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
    }
})
gsap.from(" #p3left",{
    y:"90%",
      opacity:0,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p3left ",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
    }
})

gsap.from(" #p3-ri-pic1 img",{
    y:"16%",
      opacity:0,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p3c-left ",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
    }
})

gsap.from(" #p3-pic",{
    y:"16%",
      opacity:0,
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p3-pic ",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
    }
})
gsap.from(" #p3-ri-pic2 img",{
    y:"16%",
      opacity:0,
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p3-ri-pic2 img ",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
    }
})

// this is a page6 part

gsap.from(" #svg4",{
    x:"-16%",
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#svg4 ",
        scroller:"#main",
        start:"top 87%",
        end:"top 2%",
        scrub:1
        // markers:true
    }
})
gsap.from("#svg5",{
    x:"-16%",
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#svg5 ",
        scroller:"#main",
        start:"top 87%",
        end:"top 2%",
        scrub:1
    }
})




var h1Data = document.querySelectorAll("#p6-h1 h1");
   h1Data.forEach(function(elem){

  var textData = elem.textContent

  var splitedText = textData.split("")
  var clutter = ""

  splitedText.forEach(function(e) {
    clutter += `<span>${e}</span>`
  })

elem.innerHTML = clutter
})



gsap.to("#p6-h1 h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p6-h1 h1 span",
        scroller:"#main",
        start:"top 67%",
        end:"top 5%",
        scrub:1
    }

})

gsap.to("#p6-h2 h2 ",{
    y:"-100",
      opacity:1,
    //   stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p6-h2 h2",
        scroller:"#main",
        start:"top 87%",
        end:"top 5%",
        scrub:1
        // markers:true
    }
})






gsap.from(" #svg7",{
    x:"16%",
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#svg7 ",
        scroller:"#main",
        start:"top 87%",
        end:"top 2%",
        scrub:1
        // markers:true
    }
})
gsap.from("#svg8",{
    x:"16%",
      stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#svg8 ",
        scroller:"#main",
        start:"top 87%",
        end:"top 2%",
        scrub:1
        // markers:true
    }
})


gsap.to("#p6-left img,#p6-picl h1,#p6-picl h2,#p6-right img,#p6-picr h1,#p6-picr h2 ",{
    y:"-90",
      opacity:1,
    //   stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p6-left img,#p6-right img,#p6-picl h1 ",
        scroller:"#main",
        start:"top 87%",
        end:"top 50%",
        scrub:1
        // markers:true
    }
})
gsap.to("#beech-pic img,#beech-pic h1,#beech-pic h2 ",{
    y:"-90",
      opacity:1,
    //   stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#beech-pic img,#beech-pic h1,#beech-pic h2",
        scroller:"#main",
        start:"top 87%",
        end:"top 50%",
        scrub:1
        // markers:true
    }
})

gsap.to("#p6-arrow ",{
    y:"-90",
      opacity:1,
    //   stagger:1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p6-arrow  ",
        scroller:"#main",
        start:"top 87%",
        end:"top 50%",
        scrub:1
        // markers:true
    }
})

// page7 content

var h1Data = document.querySelectorAll("#p7-text h1");
   h1Data.forEach(function(elem){

  var textData = elem.textContent

  var splitedText = textData.split("")
  var clutter = ""

  splitedText.forEach(function(e) {
    clutter += `<span>${e}</span>`
  })

elem.innerHTML = clutter
})



gsap.to("#p7-text h1 span",{
    color:"#434B33",
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p7-text h1 span",
        scroller:"#main",
        start:"top 67%",
        end:"top 5%",
        scrub:1
    }

})


gsap.to("#p7-left",{
   x:"1000",
   opacity:1,
   zIndex:999,
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p7-left",
        scroller:"#main",
        start:"top 85%",
        end:"top 5%",
        scrub:1
    }

})
gsap.to("#p7-right",{
   x:"-1000",
   opacity:1,
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p7-right",
        scroller:"#main",
        start:"top 85%",
        end:"top 5%",
        scrub:1
    }

})

gsap.to("#p7-text2 h1,#p7-text2 h2",{
   opacity:1,
    stagger:0.1,
    // stagger ek ek ke run karta hai
    scrollTrigger:{
        trigger:"#p7-text2 ",
        scroller:"#main",
        start:"top 50%",
        end:"top 5%",
        scrub:1
       
    }

})

gsap.to("#p7-arrow",{
    y:"-50",
    opacity:1,
     stagger:0.1,
     // stagger ek ek ke run karta hai
     scrollTrigger:{
         trigger:"#p7-arrow",
         scroller:"#main",
         start:"top 80%",
         end:"top 65%",
         scrub:1
        //  markers:true
     }
 
 })

//  page8 content

gsap.from("#page8 img",{
   height:"100",
     stagger:0.1,
     // stagger ek ek ke run karta hai
     scrollTrigger:{
         trigger:"#page8",
         scroller:"#main",
         start:"top 100%",
         end:"top 10%",
         scrub:1
     }
 })

 //  page9 content

 gsap.to("#page9 #svg8,#page9 #svg9",{
      stagger:0.1,
      left:"-100",
      // stagger ek ek ke run karta hai
      scrollTrigger:{
          trigger:"#page9 ",
          scroller:"#main",
          start:"top 100%",
          end:"top 20%",
          scrub:1
          
      }
  
  })








