function slide() {
    let current = document.querySelector("#slider img:not([style*='display: none;'])");
    let next = current.nextElementSibling || document.querySelector("#slider img:first-child");
    current.style.display = "none";
    next.style.display = "block";
  }
  
  setInterval(slide, 3000);

  function slide1() {
    let current = document.querySelector("#slider1 img:not([style*='display: none;'])");
    let next = current.nextElementSibling || document.querySelector("#slider1 img:first-child");
    current.style.display = "none";
    next.style.display = "block";
  }
  
  setInterval(slide1, 3000);

  function slide2() {
    let current = document.querySelector("#slider2 img:not([style*='display: none;'])");
    let next = current.nextElementSibling || document.querySelector("#slider2 img:first-child");
    current.style.display = "none";
    next.style.display = "block";
  }
  
  setInterval(slide2, 3000);

  function slide3() {
    let current = document.querySelector("#slider3 img:not([style*='display: none;'])");
    let next = current.nextElementSibling || document.querySelector("#slider3 img:first-child");
    current.style.display = "none";
    next.style.display = "block";
  }
  
  setInterval(slide3, 3000);