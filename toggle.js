document.addEventListener('DOMContentLoaded',function(){
  const link=document.getElementById('theme');
  const btn=document.getElementById('styleToggle');
  if(!link||!btn)return;
  const A='style_a.css',B='style_b.css';
  const saved=localStorage.getItem('themeHref');
  if(saved)link.href=saved;
  btn.addEventListener('click',function(){
    link.href=link.href.includes(A)?B:A;
    localStorage.setItem('themeHref',link.getAttribute('href'));
  });
});
