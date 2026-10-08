const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector("nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const cursor=document.querySelector(".cursor");
window.addEventListener("mousemove",e=>{
  if(cursor){cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";}
});
document.querySelectorAll("a,.btn").forEach(el=>{
  el.addEventListener("mouseenter",()=>{if(cursor){cursor.style.width="28px";cursor.style.height="28px"}});
  el.addEventListener("mouseleave",()=>{if(cursor){cursor.style.width="16px";cursor.style.height="16px"}});
});
