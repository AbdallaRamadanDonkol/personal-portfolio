$(document).ready(function(){
    if (!sessionStorage.getItem('visited')) {
        // First visit
        setTimeout(function(){
            $(".loading, .loader").fadeOut(500);
        }, 3000);
        sessionStorage.setItem('visited', 'true');
    } else {
        // Subsequent visits
        $(".loading, .loader").fadeOut(1000);
    }
});
AOS.init();
const page = document.body.getAttribute("data-page");
    if(page == 'home'){
    //& loop slider for images
        let skillsContainer = document.getElementById("skills-container");
        let skillsArray = ["html.avif","css.avif","js.avif","bootstrap.avif","sass.avif","jquery.avif","api.png","oop2.avif","git.avif","github.avif",];
        let cartona = "";
        for (let i = 0; i <4; i++) {
            for(let j=0;j<skillsArray.length;j++){
                cartona += `<div class="skill"><img src="assets/${skillsArray[j]}" alt=""></div>`;
            }
        skillsContainer.innerHTML = cartona;
        }
        //& typed.js for heading
        var typed = new Typed('#typed', {
            strings: ['frontend developer','web developer', 'web designer'],
            typeSpeed: 60,
            backSpeed: 60,
            loop: true
        });
    }
    if(page == 'contact'){
        let nameFocused = false;
        let mailFocused = false;
        let subjectFocused = false;
        let messageFocused = false;
        $('#name').on('focus',function(){
            nameFocused = true;
        })
        $('#email').on('focus',function(){
            mailFocused = true;
        })
        $('#subject').on('focus',function(){
            subjectFocused = true;
        })
        $('#message').on('focus',function(){
            messageFocused = true;
        })
        // ^validate name function
        function validateName() {
            let name = document.getElementById("name");
            let regexName = /^[A-Z a-z]{3,}$/;
            return regexName.test(name.value);
        }
        // ^validate email function
        function validateMail() {
            let userMail = document.getElementById("email");
            let regexMail = /^(\w){1,}@[a-z]{1,}.com$/;
            return regexMail.test(userMail.value);
        }
        // ^validate subject function
        function validateSubject() {
            let subject = document.getElementById("subject");
            let regexSubject = /^[A-Z a-z]{3,}$/;
            return regexSubject.test(subject.value);
          }
        // ^validate message function
        function validateMessage() {
            let message = document.getElementById("message");
            let regexMessage = /^[A-Z a-z 0-9]{3,}$/;
            return regexMessage.test(message.value);
          }
        function validateAlInputs(){
            if(nameFocused){
                if(validateName()){
                    $("#nameAlert").removeClass("d-block").addClass("d-none");
                }else{
                    $("#nameAlert").removeClass("d-none").addClass("d-block");
                }
            }
            if(mailFocused){
                if(validateMail()){
                    $("#mailAlert").removeClass("d-block").addClass("d-none");
                }else{
                    $("#mailAlert").removeClass("d-none").addClass("d-block");
                }
            }
            if(subjectFocused){
                if(validateSubject()){
                    $("#subjectAlert").removeClass("d-block").addClass("d-none");
                }else{
                    $("#subjectAlert").removeClass("d-none").addClass("d-block");
                }
            }
            if(messageFocused){
                if(validateMessage()){
                    $("#messageAlert").removeClass("d-block").addClass("d-none");
                }else{
                    $("#messageAlert").removeClass("d-none").addClass("d-block");
                }
            }
            if(validateName() &&
                validateMail() &&
                validateSubject() &&
                validateMessage()){
                    $('#submitBtn').removeAttr('disabled');
                }else{
                    $('#submitBtn').attr('disabled','disabled');
            }
          }
        $('#name, #email, #subject,#message').on('keyup', function() {
            validateAlInputs();
        });
        function sendEmail(){
            Email.send({
                SecureToken : "fd691f51-8fe1-4ffa-b245-69fc87c4dd1c",
                To : 'abdullahramadan123@gmail.com',
                From : "abdullahramadan123@gmail.com",
                Subject : document.getElementById("subject").value,
                Body : `name: ${document.getElementById("name").value} <br>email: ${document.getElementById("email").value}
                <br>message: ${document.getElementById("message").value}`
            }).then(
                message =>{
                    console.log("Email sent successfully:", message);
                    $(".submit_success").show("2s").addClass("d-flex");
                }
            ).catch(
                error => {
                    console.error("Failed to send email:", error);
                }
            );;
        }
            $("#continue").click(function(){
                $(".submit_success").hide("2s",function(){
                    $(".submit_success").removeClass("d-flex")
                });
                $('#submitBtn').attr('disabled','disabled')
            })
    }
    if(page == 'projects'){
        let items = document.querySelectorAll(".item");
        window.addEventListener('scroll', function() {
            let scrollTop = window.scrollY;
            items.forEach(function(e) {
                let rect = e.getBoundingClientRect().top + window.scrollY;
                let img = e.querySelector('img');
                if (Math.abs(scrollTop - rect) < window.innerHeight / 2) {
                    img.style.filter = "grayscale(0)";
                } else {
                    img.style.filter = "grayscale(1)";
                }
            });
        });
    }
    if(page == 'iframe1'){
        function ready() {
        var magic = document.querySelector("div.magic"),
            scene = document.querySelector("div.scene"),
            magicWHalf = magic.offsetWidth / 2 ;
        scene.addEventListener("mousemove", function(e) {
            var shiftX = e.clientX - magicWHalf;
            var shiftY = e.clientY - magicWHalf;
            magic.style.left = shiftX + "px";
            magic.style.top = shiftY + "px";
            //console.log(e);
        });
        scene.addEventListener("touchmove", function(e) {
            var x = e.clientX || e.touches.item(0).clientX;
            var y = e.clientY || e.touches.item(0).clientY;
            var shiftX = x - magicWHalf;
            var shiftY = y - magicWHalf;
            magic.style.left = shiftX + "px";
            magic.style.top = shiftY + "px";
            //console.log(e);
        });
        }
    }
    if(page == 'iframe2'){
        function ready() {
        var magic = document.querySelector("div.magic2"),
            scene = document.querySelector("div.scene2"),
            magicWHalf = magic.offsetWidth / 2 ;
        scene.addEventListener("mousemove", function(e) {
            var shiftX = e.clientX - magicWHalf;
            var shiftY = e.clientY - magicWHalf;
            magic.style.left = shiftX + "px";
            magic.style.top = shiftY + "px";
            //console.log(e);
        });
        scene.addEventListener("touchmove", function(e) {
            var x = e.clientX || e.touches.item(0).clientX;
            var y = e.clientY || e.touches.item(0).clientY;
            var shiftX = x - magicWHalf;
            var shiftY = y - magicWHalf;
            magic.style.left = shiftX + "px";
            magic.style.top = shiftY + "px";
            //console.log(e);
        });
        }
    }
//& open and close side menu
function closeSidebar(){
    document.addEventListener("click", function(e) {
        const aside = document.querySelector('aside');
        const nav = document.querySelector('nav');
        const devImg = document.querySelector('.show_dev_img')
        let { left: navbarOffset } = nav.getBoundingClientRect(); //getBoundingClientRect() is a method that returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        if(navbarOffset != 0){
            if (!aside.contains(e.target) && !nav.contains(e.target) && !devImg.contains(e.target)) {
                closeNavbar();
            }
        }
    });
}
closeSidebar();
$(".nav_item").click(function () {
    let { left: navbarOffset } = $("nav").offset();
    if(window.innerWidth > 320){
        if (navbarOffset == 0) {
            moveNavbar();
        } else {
            closeNavbar();
        }
    }
    if(window.innerWidth <= 320){
        if (navbarOffset == 0) {
            moveNavbarSmallScreen();
        } else {
            closeNavbar();
        }
    }
});
function moveNavbar() {
    $("nav").animate({ left: 330 },200,function(){
        $("nav").addClass("pageWidth");
    });
    $(".right_content").animate({ left: 330 },200,function(){
        $(".right_content").addClass("pageWidth");
    });
    $(".nav_btn").removeClass("fa-bars");
    $(".nav_btn").addClass("fa-close");
}
function closeNavbar(){
    $("nav").animate({ left: 0 },200);
    $("nav").removeClass("pageWidth");
    $(".right_content").animate({ left: 0 },200);
    $(".right_content").removeClass("pageWidth");
    $(".nav_btn").removeClass("fa-close");
    $(".nav_btn").addClass("fa-bars");
}
function moveNavbarSmallScreen() {
    $("nav").animate({ left: 280 },200,function(){
        $("nav").addClass("pageWidth");
    });
    $(".right_content").animate({ left: 280 },200,function(){
        $(".right_content").addClass("pageWidth");
    });
    $(".nav_btn").removeClass("fa-bars");
    $(".nav_btn").addClass("fa-close");
}
//& show and hide developer image when click on image
$("aside .dev_image").click(function(){
    $(".show_dev_img").show(200).removeClass("d-none").addClass("d-flex");
})
$(".show_dev_img .close_btn").click(function(){
    $(".show_dev_img").hide(100).removeClass("d-flex");
})
//& apply dark and light mode
const mode = document.getElementById('mode');
if (localStorage.getItem('darkMode') === 'enabled') {
  mode.checked = true;
  document.documentElement.style.setProperty('--bg-color', '#011627');
  document.documentElement.style.setProperty('--text-color', '#fff');
  document.documentElement.style.setProperty('--secondary-color', '#fff');
}

mode.addEventListener('change', () => {
  if (mode.checked) {
    localStorage.setItem('darkMode', 'enabled');
    document.documentElement.style.setProperty('--bg-color', '#011627');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--secondary-color', '#fff');
  } else {
    localStorage.setItem('darkMode', 'disabled');
    document.documentElement.style.setProperty('--bg-color', '#ececec');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--secondary-color', '#595c5f');
  }
});
//////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.links a');

//     links.forEach(link => {
//         link.addEventListener('click', function(event) {
//             event.preventDefault();

//             const flip_page = document.querySelector('.flip_page');
//             flip_page.classList.add('fold-out');

//             setTimeout(() => {
//                 window.location.href = this.href;
//             }, 1000); // Adjust timeout to match animation duration
//         });
//     });

//     window.addEventListener('pageshow', () => {
//         const flip_page = document.querySelector('.flip_page');
//         flip_page.classList.remove('fold-out');
//         flip_page.classList.add('fold-in');
//     });
// });
