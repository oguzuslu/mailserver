// //let codeval = 0
copyCode()
document.getElementById('vid').play();
function copyCode() {
    console.log('enterence');
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    let value = params.code; // "some_value"
    document.getElementById('getcode').value = value
    codeval = value
    console.log('asdad', codeval);
    return codeval
}
function copyToClipboard() {
    var textBox = document.getElementById("getcode");
    textBox.select();
    document.execCommand("copy");

    if (codeval !== null) {
        openmodal()
    } else {
        alert('Something is wrong! Please check your invite link is correct!')
    }

}
function openmodal() {
    //**open modal */
    // Get the modal
    var modal = document.getElementById("myModall");
    console.log('3333');
    // Get the button that opens the modal
    //var btn = document.getElementById("button7");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    //  btn.onclick = function () {
    modal.style.display = "block";
    // }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function registration(e) {
    console.log(e);
    const contactForm = document.querySelector('.contact-form-register')
    let firstname = document.getElementById('namee')
    let email = document.getElementById('email')
    let phone = document.getElementById('phone')
    let companyname = document.getElementById('companyname')
    let subject = document.getElementById('subject')
    let message = document.getElementById('message')

    e.preventDefault()

    let formData = {
        namee: firstname.value,
        email: email.value,
        phone: phone.value,
        companyname: companyname.value,

        subject: subject.value,
        message: message.value
    }
    console.log('dd', formData);

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/send-email')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function () {
        console.log('fff', xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('email sent')
            firstname.value = '';
            email.value = '',
                phone.value = '',
                companyname.value = '',
                subject.value = '',
                message.value = ''
        } else {
            alert('Something wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))




}




function user(e) {
    // console.log('gegehge');
    const contactForm = document.querySelector('.contact-form-user')
    // console.log('contactt', contactForm);
    let firstname = document.getElementById('nameeu')
    let email = document.getElementById('emailu')
    let subject = document.getElementById('subjectu')
    let message = document.getElementById('messageu')
    e.preventDefault()

    let formData = {
        namee: firstname.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    console.log(formData);

    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/send-email')
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('email sent')
            firstname.value = '';
            email.value = '',
                subject.value = '',
                message.value = ''
        } else {
            alert('Something wrong!')
        }
    }
    xhr.send(JSON.stringify(formData))



}





















// const contactForm = document.querySelector('.contact-form')
// let firstname = document.getElementById('namee')
// let email = document.getElementById('email')
// let subject = document.getElementById('subject')
// let message = document.getElementById('message')

// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     let formData = {
//         namee: firstname.value,
//         email: email.value,
//         subject: subject.value,
//         message: message.value
//     }
//     console.log(formData);

//     let xhr = new XMLHttpRequest()
//     xhr.open('POST', '/')
//     xhr.setRequestHeader('content-type', 'application/json')
//     xhr.onload = function () {
//         console.log(xhr.responseText);
//         if (xhr.responseText == 'success') {
//             alert('email sent')
//             firstname.value = '';
//             email.value = '',
//                 subject.value = '',
//                 message.value = ''
//         } else {
//             alert('Something wrong!')
//         }
//     }
//     xhr.send(JSON.stringify(formData))
// })
