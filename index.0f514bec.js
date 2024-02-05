var e=document.querySelector("#slider"),t=Array.from(e.children),d=document.querySelector("#btnNext"),r=document.querySelector("#btnPrev");function a(d){var r,a=e.querySelector("[data-active]"),i=+a.dataset.index;a.classList.add("slider__photo--hidden"),a.removeAttribute("data-active"),"next"===d&&(r=i+1===t.length?0:i+1),"prev"===d&&(r=0===i?t.length-1:i-1);var n=e.querySelector('[data-index="'.concat(r,'"]'));n.classList.remove("slider__photo--hidden"),n.setAttribute("data-active","")}//# sourceMappingURL=index.0f514bec.js.map
t.forEach(function(e,d){0!==d&&e.classList.add("slider__photo--hidden"),e.dataset.index=d,t[0].setAttribute("data-active","");// slide.addEventListener('click', function() {
//   showNextSlide('next');
// });
}),d.addEventListener("click",function(){a("next")}),r.addEventListener("click",function(){a("prev")});
//# sourceMappingURL=index.0f514bec.js.map
