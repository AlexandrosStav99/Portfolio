document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href'); if(id.length>1){ e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'}) }
    })
  });
  const y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
});

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('show');
      burger.classList.toggle('active');
      burger.setAttribute('aria-expanded', menu.classList.contains('show'));
    });
    document.addEventListener('click', function (e) {
      if (
        !burger.contains(e.target) &&
        !menu.contains(e.target) &&
        menu.classList.contains('show')
      ) {
        menu.classList.remove('show');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
