consoleText(['Bienvenidos a mi portafolio', 'Welcome to my portafolio', '歡迎來到我的網站'], 'text', ['#fefae0', '#f1faee', 'fff']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 60)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 660)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 80)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 600)
}


var boton = document.getElementById('boton-oculto')
window.setInterval(function () {
    boton.style.display = 'block'
    boton.style.transition = '3s'
    boton.style.color = '#f1f2f6'
    boton.style.paddingTop = '220px'
}, 2500)
window.setInterval(function () {
    boton.style.transition = '3s'
    boton.style.paddingTop = '240px'
}, 5000)
boton.addEventListener('click', function (event) {
    event.preventDefault(); //esto cancela el comportamiento del click
    setTimeout(() => location.href = "#sec-1", 500);
});


function ventanaSuscripcion() {
    var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.addEventListener('click', function () {
        overlay.classList.add('active');
        popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
}

function ventanaDjango() {
    var btnAbrirPopup = document.getElementById('btn-abrir-popup2'),
        overlay2 = document.getElementById('overlay2'),
        popup3 = document.getElementById('popup3'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup3');

    btnAbrirPopup.addEventListener('click', function () {
        overlay2.classList.add('active');
        popup3.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        overlay2.classList.remove('active');
        popup3.classList.remove('active');
    });
}

function ventanaScraping() {
    var btnAbrirPopup = document.getElementById('btn-abrir-popup3'),
        overlay2 = document.getElementById('overlay3'),
        popup3 = document.getElementById('popup4'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup4');

    btnAbrirPopup.addEventListener('click', function () {
        overlay2.classList.add('active');
        popup3.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function (e) {
        e.preventDefault();
        overlay2.classList.remove('active');
        popup3.classList.remove('active');
    });
}

function desarrolloWeb() {

    var leerMasWeb = document.getElementById('leerMasWeb'),
    overlayWeb = document.getElementById('overlayWeb'),
    popupWeb = document.getElementById('popupWeb'),
    btnCerrarPopupWeb = document.getElementById('btn-cerrar-popup-web');

    leerMasWeb.addEventListener('click', function () {
        overlayWeb.style.display = 'flex'
        overlayWeb.classList.add('active');
        popupWeb.classList.add('active');
    });

    btnCerrarPopupWeb.addEventListener('click', function (e) {
        e.preventDefault();
        overlayWeb.style.display = 'none'
        overlayWeb.classList.remove('active');
        popupWeb.classList.remove('active');
    });
}

function desarolloDev() {

    var leerMasDev = document.getElementById('leerMasDev'),
    overlayDev = document.getElementById('overlayDev'),
    popupDev = document.getElementById('popupDev'),
    btnCerrarPopupDev = document.getElementById('btn-cerrar-popup-dev');

    leerMasDev.addEventListener('click', function () {
        overlayDev.style.display = 'flex'
        overlayDev.classList.add('active');
        popupDev.classList.add('active');
    });

    btnCerrarPopupDev.addEventListener('click', function (e) {
        e.preventDefault();
        overlayDev.style.display = 'none'
        overlayDev.classList.remove('active');
        popupDev.classList.remove('active');
    });
}

function desarolloScr() {

    var leerMasScr = document.getElementById('leerMasScr'),
    overlayScr = document.getElementById('overlayScr'),
    popupScr = document.getElementById('popupScr'),
    btnCerrarPopupScr = document.getElementById('btn-cerrar-popup-scr');

    leerMasScr.addEventListener('click', function () {
        overlayScr.style.display = 'flex'
        overlayScr.classList.add('active');
        popupScr.classList.add('active');
    });

    btnCerrarPopupScr.addEventListener('click', function (e) {
        e.preventDefault();
        overlayScr.style.display = 'none'
        overlayScr.classList.remove('active');
        popupScr.classList.remove('active');
    });
}

$("nav .nav-link").on("click", function(){
    $("nav").find(".active").removeClass("active");
    $(this).addClass("active");
});


function fechaHora() {
    let date = new Date()
    const footer = document.getElementById('fechaHora')
    let fecha = date.getDate() + '-' + ( date.getMonth() + 1 ) + '-' + date.getFullYear();

    footer.innerHTML = date.toLocaleDateString()
}
fechaHora()

