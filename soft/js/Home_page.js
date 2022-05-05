const sss=document.querySelectorAll(".ss");

sss.forEach(function(items){
console.log(13);

  items.addEventListener("click", function(item){
    console.log(12);
    let currentS=item;
    console.log('hi');
    sss.forEach(function(item){
      item.classList.remove('active');
    });
    currentS.classList.add('active');
  });

});





const login_js=document.querySelector(".openLogin");
const log_js=document.querySelector(".Log_in");
if (log_js != undefined)
log_js.addEventListener("click",function(){
  login_js.classList.add('active');
})

const signUp_js=document.querySelector(".openSignUp");
const sign_js=document.querySelector(".sign_up");
if (sign_js != undefined)
sign_js.addEventListener("click",function(){
  signUp_js.classList.add('active');
})
let close_bottom1=document.querySelector(".close");
close_bottom1.addEventListener("click",function(){
  signUp_js.classList.remove('active');
})
const close_bottom=document.querySelector(".forLog");
close_bottom.addEventListener("click",function(){
  login_js.classList.remove('active');
})

const pages=document.querySelectorAll(".nav navbar-nav");
pages.forEach(function(item){
  item.addEventListener("click",function(){
    let currentp=item;
    console.log(currentp);
    pages.forEach(function(item){
      item.classList.remove('active');
    })
    currentp.classList.add('active')
  })
}
)
function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-linkss");
    const navLinks = document.querySelectorAll(".nav-linkss li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });

}

navSlide();
