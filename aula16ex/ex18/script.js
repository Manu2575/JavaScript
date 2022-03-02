let num = document.querySelector('unput#fnum')
let lista = document.querySelector('selsct#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (1.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        window.alert('valor inválido ou já encontrado na lista.')
    }
}