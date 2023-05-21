'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navToggler = document.querySelector("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);


const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElemOnScroll);



/**
 * product detail 
 */

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar-items');

if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function changePrice() {
    var bookType = document.getElementById("book-type").value;
    var bookPrice = document.getElementById("price");
    if (bookType === "hardback") {
      bookPrice.innerHTML = "$45.00";
    } else {
      bookPrice.innerHTML = "$50.00";
    }
  }
  

var bigImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("smalImg")

smallImg[0].onclick = function(){
    bigImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    bigImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    bigImg.src = smallImg[2].src;
}

function rst(){
    document.getElementById('form').reset();
}



/**
 * budget filter
 */

let minValue = document.getElementById("min-value");
let maxValue = document.getElementById("max-value");

function validateRange(minPrice, maxPrice) {
  if (minPrice > maxPrice) {

    // Swap to Values
    let tempValue = maxPrice;
    maxPrice = minPrice;
    minPrice = tempValue;
  }

  minValue.innerHTML = "$" + minPrice;
  maxValue.innerHTML = "$" + maxPrice;
}

const inputElements = document.querySelectorAll("input");

inputElements.forEach((element) => {
  element.addEventListener("change", (e) => {
    let minPrice = parseInt(inputElements[0].value);
    let maxPrice = parseInt(inputElements[1].value);

    validateRange(minPrice, maxPrice);
  });
});

validateRange(inputElements[0].value, inputElements[1].value);