let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650
    } else {
        return 400
    }
}

function cervejaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000
    } else {
        return 1200
    }
}

function bebidaPorPessoa(duracao){
    if(duracao >= 6){
        return 1500
    } else {
        return 1000
    }
}

function calcular(){
    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let totalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas)
    let totalCerveja = cervejaPorPessoa(duracao) * adultos
    let totalBebidas = bebidaPorPessoa(duracao) * adultos + (bebidaPorPessoa(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(totalBebidas / 2000)} Garrafas Pet's 2l de Bebida</p>`
}