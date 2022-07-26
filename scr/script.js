var nav = 0
var menu = document.getElementById('menu')

function openNav() {
    nav = nav + 1
    if (nav % 2 == 1) {
        document.getElementById('sidenav').style.width = '250px'
        document.body.style.opacity = '80%'
        menu.classList.toggle("change");
        document.getElementById('body').style.overflow = 'hidden'
        return true
    } else {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
        menu.classList.toggle("change");
        document.getElementById('body').style.overflowY = 'scroll'
        document.getElementById('body').style.overflowX = 'hidden'
        return false
    }
}

//-AQUI TERMINA O MENU--------------------------------------------
//-AQUI COMEÇA O FADE ESCONDIDO-----------------------------------

var opacity = 0
var intervalID = 0

function fadeOut() {
    setInterval(hide, 50)
}

function hide() {
    var main = document.getElementById('main')
    opacity = Number(window.getComputedStyle(main).getPropertyValue('opacity'))
    if(opacity > 0){
        opacity = opacity - 0.1
        main.style.opacity = opacity
    } else {
        clearInterval(intervalID)
        clearInterval(timeout)
    }
    document.getElementById('header').style.marginTop = '-102px'
    document.getElementById('footer').style.display = 'none'
    return delay()
}

var timeout

function delay() {
    timeout = setTimeout(fadeIn, 2000)
}

function fadeIn() { // A FIXAR
    setInterval(show, 50)
}

function show() {
    if(opacity<1){
        opacity = opacity + 0.1
        main.style.opacity = opacity
    } else {
        clearInterval(intervalID)
        clearTimeout(timeout)
    }
    document.getElementById('header').style.marginTop = '0px'
    document.getElementById('footer').style.display = 'block'
    document.getElementById('titulo').removeAttribute('onclick')
    document.getElementById('titulo').removeAttribute('href')
}

//-AQUI TERMINA O FADE ESCONDIDO----------------------------------
//-AQUI COMEÇAM AS PÁGINAS----------------------------------------

function Home() {
    document.getElementById('apresentacao').style.display = 'inline'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

function Home_Click() {
    document.getElementById('apresentacao').style.display = 'inline'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
}

function Campo() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'inline'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
    
}

function Ataque() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'inline'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

function Magia() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'inline'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

function Invocacao() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'inline'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

function Manga() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'inline'
    document.getElementById('regras').style.display = 'none'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

function Manga_Jogar() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'inline'
    document.getElementById('regras').style.display = 'none'
}

function Regras() {
    document.getElementById('apresentacao').style.display = 'none'
    document.getElementById('campo').style.display = 'none'
    document.getElementById('ataque').style.display = 'none'
    document.getElementById('magia').style.display = 'none'
    document.getElementById('invocacao').style.display = 'none'
    document.getElementById('manga').style.display = 'none'
    document.getElementById('regras').style.display = 'inline'
    if (openNav() == false) {
        document.getElementById('sidenav').style.width = '0'
        document.body.style.opacity = '100%'
    }
}

//-AQUI TERMINAM AS PÁGINAS---------------------------------------
//-AQUI COMEÇAM OS DETALHES DAS IMAGENS---------------------------

var counter_atq = 0
var counter_mag = 0
var counter_inv = 0

function ataqueDetailed() {
    counter_atq = counter_atq + 1

    if (counter_atq % 2 == 1) {
        document.getElementById('img_atq').src = 'img/ataque_detailed.jpg'
    } else {
        document.getElementById('img_atq').src = 'img/ataque_s.jpg'
    }
}

function magiaDetailed() {
    counter_mag = counter_mag + 1

    if (counter_mag % 2 == 1) {
        document.getElementById('img_mag').src = 'img/magia_detailed.jpg'
    } else {
        document.getElementById('img_mag').src = 'img/magia_s.jpg'
    }
}

function invocacaoDetailed() {
    counter_inv = counter_inv + 1

    if (counter_inv % 2 == 1) {
        document.getElementById('img_inv').src = 'img/invocacao_detailed.jpg'
    } else {
        document.getElementById('img_inv').src = 'img/invocacao_s.jpg'
    }
}