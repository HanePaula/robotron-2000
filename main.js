const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const estatisticas = document.querySelectorAll("[data-estatistica]");

const controle = document.querySelectorAll("[data-controle]");

const robo = document.querySelectorAll("[data-exibicao]");

robo.forEach ( (elemento, indice) =>{
    elemento.addEventListener("click", () => {
        if (indice >= robo.length - 1){
            elemento.dataset.exibicao = "esconder";
            robo[0].dataset.exibicao = "mostrar";
        }
        else{
            elemento.dataset.exibicao = "esconder";
            robo[indice + 1].dataset.exibicao = "mostrar";
        }
    })
})

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento) =>{
        manipulaDados (evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca);
    })

})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector ("[data-contador]");

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }
    else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(operacao, peca){
    console.log(pecas[peca]);

    estatisticas.forEach( (elemento) =>{
        if (operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        }
        else{
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        }
    })

}
