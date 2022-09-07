// window.onload = () => {
//     setTimeout(() => {
//         const route = location.href
//         console.log(route);
//         if (route.includes('EN')) {
//             const inp = document.getElementById('languadege-toggle');
//             // inp.value = "0"
//             const en = document.getElementById('en')
//             const de = document.getElementById('de')

//             //  en.className = "on";
//             //en.className.remove('off');
//             //  de.className = "off";
//             // #acc-btn.show:after, #acc-btn.show:before {
//             //     display: block;
//             // }
//             // de.className.remove('on')
//             $("#de").toggleClass("off");
//             $("#en").toggleClass("on");
//             de.innerHTML("DEss")
//         } else if (route.includes('DE')) {
//             $("#de1").toggleClass("off");
//             $("#en1").toggleClass("off");
//             // const inp = document.getElementById('language-toggle');
//             console.log("burda");
//             // inp.value = "1"
//             setTimeout(() => {
//                 const en1 = document.getElementById('en')
//                 const de1 = document.getElementById('de')
//                 console.log(inp.value, de1, en1);
//                 //   en.className = "on";
//                 //en.className.remove('off');
//                 //  de.className = "off";
//                 // de1.classList.add('off');
//                 // de1.classList.remove('off');
//                 // en1.classList.add('off');
//                 // de1.className.remove('on')
//             }, 250);
//         }
//     }, 250);
// }

function langChanger(val) {
    // console.log(val);
    // var userLang = navigator.language || navigator.userLanguage;

    // if (val) {
    //     // Sitenin ana dili Türkçe olacaksa yönlendirmeye gerek yok
    //     location.href = "/index-DE.html";
    //     console.log("girdi de");
    // } else {
    //     location.href = "/index-EN.html";
    //     console.log("girdi en");
    // }
    // var t = document.getElementById("language-toggle");
    if (val === "1") {

        setTimeout(() => {
            location.href = "/";
            // const inp1 = document.getElementById('de');
            //const inp2 = document.getElementById('en');
            const inp3 = document.getElementById('de1');
            const inp4 = document.getElementById('en1');
            //inp.classList.toggle('before')
            const en = document.getElementById('en')
            const de = document.getElementById('de')
            $("#de1").className("on");
            $("#en1").className("off");
            inp3.innerHTML = "A"
            inp4.innerHTML = "B"
            // inp1.addEventListener('click', (e) => {

            //     toggle(e.target, 'input.check-toggle-round-flat+label:before ')
            // })
            // inp2.addEventListener('click', (e) => {

            //     toggle(e.target, 'input.check-toggle-round-flat+label:after ')
            // })
            inp3.addEventListener('click', (e) => {

                toggle(e.target, 'input.check-toggle-round-flat+label:before')
            })
            inp4.addEventListener('click', (e) => {

                toggle(e.target, 'input.check-toggle-round-flat+label:after ')
            })


        }, 1000);
        // console.log("girdi de", val);
    }
    else if (val === "0") {
        // console.log("girdi en", val);

        setTimeout(() => {
            location.href = "/en";
            const inp1 = document.getElementById('de');
            const inp2 = document.getElementById('en');
            // const inp3 = document.getElementById('de1');
            // const inp4 = document.getElementById('en1');
            // inp.classList.toggle('before')
            // const en = document.getElementById('en1')
            // const de = document.getElementById('de1')
            // $("#de").toggleClass("on");
            // $("#en").toggleClass("off");
            // en1.innerHTML = "C"
            // de1.innerHTML = "D"
            inp1.addEventListener('click', (e) => {

                toggle(e.target, 'input.check-toggle-round-flat+label:before')
            })
            inp2.addEventListener('click', (e) => {

                toggle(e.target, 'input.check-toggle-round-flat+label:after ')
            })
            // inp3.addEventListener('click', (e) => {

            //     toggle(e.target, 'input.check-toggle-round-flat+label:before')
            // })
            // inp4.addEventListener('click', (e) => {

            //     toggle(e.target, 'input.check-toggle-round-flat+label:after ')
            // })


        }, 1000); console.log("girdi en", val);
    }

}
// function btnlang() {
//     $('[lang]').hide(); // hide all lang attributes on start.
//     $('[lang="ko"]').show(); // show just Korean text (you can change it)
//     $('#lang-switch').change(function () { // put onchange event when user select option from select
//         var lang = $(this).val(); // decide which language to display using switch case. The rest is obvious (i think)
//         switch (lang) {
//             case 'en':
//                 $('[lang]').hide();
//                 $('[lang="en"]').show();
//                 break;
//             case 'ko':
//                 $('[lang]').hide();
//                 $('[lang="ko"]').show();
//                 break;
//             default:
//                 $('[lang]').hide();
//                 $('[lang="ko"]').show();
//         }
//     });
// }