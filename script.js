const projects = [
  {name:"Abur", type:"Cafenea și ceainărie", url:"https://david-has.github.io/Abur/",
   desc:"Site pentru o cafenea și ceainărie, cu meniu, combo-uri, abonamente și rezervări. Un comutator schimbă pagina între varianta de zi (ceainărie) și cea de seară (cafenea).",
   fit:"Potrivit pentru cafenele, restaurante, patiserii, pensiuni."},
  {name:"Bemol", type:"Jazz club", url:"https://david-has.github.io/Bemol/",
   desc:"Pagină pentru un jazz club, cu programul săptămânii, rezervare cu alegerea datei și a zonei și un pian pe care poți cânta din mouse, touch sau tastatură.",
   fit:"Potrivit pentru baruri, cluburi, restaurante, săli de evenimente."},
  {name:"Fluxa", type:"Aplicație de finanțe", url:"https://david-has.github.io/Fluxa/",
   desc:"Landing page pentru o aplicație de finanțe personale, cu grafic interactiv al cheltuielilor, calculator de economii și plan de prețuri lunar sau anual.",
   fit:"Potrivit pentru aplicații, startup-uri și produse digitale."},
  {name:"Glitchwave", type:"Joc indie", url:"https://david-has.github.io/GLITCHWAVE/",
   desc:"Landing page pentru un joc indie, cu un mini-demo jucabil direct în pagină, ediții cu prețuri, înscriere la wishlist și întrebări frecvente.",
   fit:"Potrivit pentru dezvoltatori de jocuri și studiouri mici."}
];
const $ = id => document.getElementById(id);
const picker=$("picker"), view=$("view"), screenEl=$("screen");
let current=0;

function fit(){
  const w=screenEl.clientWidth;
  const narrow=w<480;
  screenEl.classList.toggle("narrow",narrow);
  if(narrow){
    view.style.width="100%"; view.style.height="100%"; view.style.transform="none";
    return;
  }
  const h=screenEl.clientHeight;
  const base=1280, s=w/base;
  view.style.width=base+"px";
  view.style.height=(h/s)+"px";
  view.style.transform="scale("+s+")";
}
function show(i){
  current=i; const p=projects[i];
  [...picker.children].forEach((b,j)=>b.setAttribute("aria-pressed",j===i));
  $("d-title").textContent=p.name+" – "+p.type;
  $("d-desc").textContent=p.desc+" Proiect personal demonstrativ.";
  $("d-fit").textContent=p.fit;
  $("d-url").textContent=p.url.replace("https://","");
  $("d-open").href=p.url;
  if(view.getAttribute("src")!==p.url) view.src=p.url;
}
projects.forEach((p,i)=>{
  const b=document.createElement("button");
  b.className="pick"; b.type="button";
  b.innerHTML="<strong></strong><span></span>";
  b.firstChild.textContent=p.name; b.lastChild.textContent=p.type;
  b.addEventListener("click",()=>show(i));
  picker.appendChild(b);
});
new ResizeObserver(fit).observe(screenEl);
window.addEventListener("resize",fit);
fit(); show(0);