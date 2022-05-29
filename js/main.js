// function([string1, string2],target id,[color1,color2])    
consoleText(['Bienvenidos a mi portafolio', 'Welcome to my ', '歡迎來到我的網站'], 'text', ['#fefae0', '#f1faee', 'fff']);

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
boton.addEventListener('click',function (event) {
  event.preventDefault(); //esto cancela el comportamiento del click
    setTimeout(()=> location.href="#sec-1",500);
});
