document.addEventListener('DOMContentLoaded', function() {

    var loader = document.getElementById('pre-loader');
    var siteMusic1 = document.getElementById("music-1");
    var siteMusic2 = document.getElementById("music-2");
    siteMusic1.volume = 0.5;
    siteMusic1.play();

    escondeBotao();
    setTimeout(mostraBotao,20000);

    const comando = document.getElementById('botao-inicial');
    comando.addEventListener('click', function() {
        document.getElementById('preloader').style.opacity = 0;
        document.getElementById('botao-inicial').style.visibility = "hidden";
        document.querySelector('header').style.visibility = "visible";
        siteMusic1.pause();
        siteMusic2.play();
        document.getElementById('preloader').style.zIndex = "-1";
    })

    // window.addEventListener('load',function() {
    //     loader.style.display = "none";
    // })

    const cabecalho = document.getElementById('navegacao');
    cabecalho.addEventListener('click', function() {
        siteMusic2.pause();
    })

})

function escondeBotao() {

    const botao = document.getElementById('botao-inicial');
    botao.style.visibility = "hidden";
    document.querySelector('header').style.visibility = "hidden";
    document.getElementById('warning').style.visibility = "hidden";

}

function mostraBotao() {

    const botao = document.getElementById('botao-inicial');
    botao.style.visibility = "visible";
    botao.style.cursor = "pointer";
    document.getElementById('warning').style.visibility = "visible";

}

function filme_Play(filme_name) {

    tela = document.querySelector('#cinema');
    tela.src = filme_name;
    tela.play();

}

document.addEventListener('click',function(e) {
    if(e.target.classList.contains('gallery-item')) {
        const src = e.target.getAttribute('src');
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})