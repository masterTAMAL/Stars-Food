window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menutoggle = document.querySelector('.menutoggle');
    const navigation = document.querySelector('.navigation');
    menutoggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const contactForm = document.querySelector('.contactForm');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const mess = document.getElementById("message");

function sendEmail()
{
    const bodyMessage=`name:${fullname.value}<br>email:${email.value}<br>phone:${phone.value}<br> message:${mess.value}`

    Email.send({
        SecureToken : "65f0b67b-4a5d-4898-b917-de3592465714",
        //  Host : "smtp.elasticemail.com",
        //  Username : "tamalg426@gmail.com",
        // Password : "E511CA94CDF7A1815737F4FE092B64C24750",
        To : 'tamalg426@gmail.com',
        From : "tamalg426@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if(message=="OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items=document.querySelectorAll(".item");
    for(const item of items)
    {
        if(item.value==""){
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if(item[1].value!="")
        {
            checkEmail();
        }

        item[1].addEventListener("keyup",()=>{
            checkEmail();

        });
        item.addEventListener("keyup",()=>{
            if(item.value!=""){
                item.classList.remove("error");
            item.parentElement.classList.remove("error");
            }
            else{
                item.classList.add("error");
            item.parentElement.classList.add("error");
            }
        })
    }
}
function checkEmail()
{
    const emailRegex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail=document.querySelector(".error-text.email");
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
        if(email.value!="")
        {
            errorTxtEmail.innerText="Enter the a valid email address"

        }
        else{
            errorTxtEmail.innerText="Email name can't be blank"
        }
    }
    else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();
    }
    contactForm.reset();
    return false;
});



//or// Add this script tag for Email.js in your HTML file:
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>

// window.addEventListener('scroll', function () {
//     const header = document.querySelector('header');
//     header.classList.toggle("sticky", window.scrollY > 0);
// });

// function toggleMenu() {
//     const menutoggle = document.querySelector('.menutoggle');
//     const navigation = document.querySelector('.navigation');
//     menutoggle.classList.toggle('active');
//     navigation.classList.toggle('active');
// }

// const contactForm = document.querySelector('.contactForm');
// const fullname = document.getElementById("name");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// const mess = document.getElementById("message");

// function sendEmail() {
//     const bodyMessage = `name: ${fullname.value}\nemail: ${email.value}\nphone: ${phone.value}\nmessage: ${mess.value}`;

//     emailjs.send("service_your_emailjs_service_id", "template_your_emailjs_template_id", {
//         to_email: 'tamalg426@gmail.com', // Replace with your target email address
//         from_name: 'Your Website', // Replace with your website or company name
//         message: bodyMessage
//     })
//     .then(
//         function(response) {
//             console.log("Sent successfully:", response);
//             Swal.fire({
//                 title: "Success!",
//                 text: "Message sent successfully!",
//                 icon: "success"
//             });
//         },
//         function(error) {
//             console.log("Failed to send:", error);
//         }
//     );
// }

// function checkInputs() {
//     const items = document.querySelectorAll(".item");
//     for (const item of items) {
//         if (item.value === "") {
//             item.classList.add("error");
//             item.parentElement.classList.add("error");
//         }
//         if (item[1].value !== "") {
//             checkEmail();
//         }

//         item[1].addEventListener("keyup", () => {
//             checkEmail();
//         });
//         item.addEventListener("keyup", () => {
//             if (item.value !== "") {
//                 item.classList.remove("error");
//                 item.parentElement.classList.remove("error");
//             } else {
//                 item.classList.add("error");
//                 item.parentElement.classList.add("error");
//             }
//         });
//     }
// }

// function checkEmail() {
//     const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

//     const errorTxtEmail = document.querySelector(".error-text.email");
//     if (!email.value.match(emailRegex)) {
//         email.classList.add("error");
//         email.parentElement.classList.add("error");
//         if (email.value !== "") {
//             errorTxtEmail.innerText = "Enter a valid email address";
//         } else {
//             errorTxtEmail.innerText = "Email can't be blank";
//         }
//     } else {
//         email.classList.remove("error");
//         email.parentElement.classList.remove("error");
//     }
// }

// contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     checkInputs();

//     if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !mess.classList.contains("error")) {
//         sendEmail();
//     }
//     contactForm.reset();
//     return false;
// });


