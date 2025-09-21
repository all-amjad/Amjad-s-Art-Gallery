// ===== script.js =====

// زر الوضع الليلي
const darkModeToggle = document.getElementById("darkModeToggle");

// نحفظ حالة الوضع الليلي في التخزين المحلي عشان لو رجع يفتح الموقع يظل نفس الوضع
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// عند الضغط على الزر
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // نخزن حالة الوضع الليلي
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
})



// small UI extras (put into ../JS/script.js)
(function(){
  // navbar shrink on scroll
  const nav = document.querySelector('nav.navbar');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // optional: add "fade-in" to hero children only once
  document.addEventListener('DOMContentLoaded', function(){
    const hero = document.querySelector('.hero');
    if(hero) {
      hero.querySelectorAll('.display-4, .lead, img').forEach((el,i)=>{
        el.style.animationDelay = (i*90)+'ms';
        el.classList.add('fade-in');
      });
    }
  });
})();