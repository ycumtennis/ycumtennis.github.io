window.addEventListener('scroll',()=>document.querySelector('.site-header')?.classList.toggle('scrolled',scrollY>20));
document.querySelector('.menu-toggle')?.addEventListener('click',()=>document.querySelector('.menu')?.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
