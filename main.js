let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move");
};

//Email JS
function validate(){
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let msg = document.querySelector(".message").value;
    let sendBtn = document.querySelector(".send-btn");

    sendBtn.addEventListener('click', (e) =>{
        e.preventDefault();
        if(name.value== "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function  emptyerror(){
    swal({
        title: "Error!",
        text: "Fields cannot be empty",
        icon: "error",
      });
}
function sendmail(name,email,msg){
    emailjs.send("service_k4hh6gq","template_ik1f8vj",{
        name: name,
        email: email,
        msg: msg,
        });
}
function success(){
    swal({
        title: "Success",
        text: "Email Sent Successfully",
        icon: "success",
      });
}
//Header Background Chnage On Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});