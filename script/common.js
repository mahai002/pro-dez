"use strict";window.onload=function(){setTimeout(function(){document.body.classList.add("loaded_hiding"),window.setTimeout(function(){document.body.classList.add("loaded"),document.body.classList.remove("loaded_hiding")},500)},1e3);var headerSlider=new Swiper(".start",{wrapperClass:"start-wrapper",slideClass:"start-slide",slideActiveClass:"start-slide-active",slidesPerView:1,pagination:{el:".start-pagination",type:"bullets",dynamicBullets:!0},autoplay:{delay:5e3}}),burger=document.querySelector(".header__burger"),navList=document.querySelector(".header__list"),nav=document.querySelector(".header");burger.addEventListener("click",function(){navList.classList.toggle("active"),burger.classList.toggle("active")});var prevScrollpos=window.pageYOffset,navHeight=nav.clientHeight;window.addEventListener("scroll",function(){var currentScrollPos=window.pageYOffset;nav.style.top=prevScrollpos>currentScrollPos?0+"px":-navHeight+"px",prevScrollpos=currentScrollPos})};