//for the menu open in mobile view..
// addEventListener('DOMContentLoaded',yes);

let btn =document.getElementById('btn');

let element =document.querySelector(".sidebar")

window.addEventListener("resize", function() {
  if (window.innerWidth > 981) {
    element.style.transform = "translate(0px, 0px)";
  }
  
});

    btn.onclick =()=>{
        let st =getComputedStyle(element).transform;
        
            if (st === "matrix(1, 0, 0, 1, -337, 10)") {
                element.style.transform = "translate(0px, 0px)";
              } else {
                element.style.transform = "translate(-300px, 10px)";
              
        }
    }
  
    // for close menu in the mobile view..
    let btnC =document.getElementById("close");
    
    btnC.onclick=()=>{

        element.style.transform ="translate(-337px, 10px)";
    }
