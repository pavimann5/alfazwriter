// =============================
// ALFAAZ OFFICIAL WEBSITE
// script.js
// =============================
// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 80) {
        header.style.background = "#000";
        header.style.padding = "15px 8%";
        header.style.transition = "0.4s";
    } else {
        header.style.background = "#111";
        header.style.padding = "20px 8%";
    }
});
// Hero Fade Animation
const hero = document.querySelector(".hero");
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if(hero){
        hero.style.opacity = 1 - value / 700;
        hero.style.transform = "translateY(" + value * 0.2 + "px)";
    }
});
// Story Cards Animation
const cards = document.querySelectorAll(".story-card");
window.addEventListener("scroll", function(){
    cards.forEach(function(card){
        let top = card.getBoundingClientRect().top;
        if(top < window.innerHeight-80){
            card.style.opacity="1";
            card.style.transform="translateY(0px)";
            card.style.transition="0.8s";
        }
    });
});
cards.forEach(function(card){
card.style.opacity="0";
card.style.transform="translateY(60px)";
});
// Back To Top Button
const topBtn=document.createElement("button");
topBtn.innerHTML="↑";
document.body.appendChild(topBtn);
topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#d4af37";
topBtn.style.color="#000";
topBtn.style.fontSize="24px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 0 20px rgba(0,0,0,.4)";
topBtn.style.zIndex="9999";
window.addEventListener("scroll",function(){
if(window.scrollY>500){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});
topBtn.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
};
// Welcome Message
setTimeout(function(){
console.log("Welcome to ALFAAZ Official Website");
},1000);

⸻