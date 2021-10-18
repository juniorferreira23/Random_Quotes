const frase1 = {
    frase: "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.",
    autor: 'Roberto Shinyashiki'
}
const frase2 = {
    frase: "Imagine uma nova história para sua vida e acredite nela.",
    autor: 'Paulo Coelho'
}
const frase3 = {
    frase: "Não espere por uma crise para descobrir o que é importante em sua vida.    ",
    autor: 'Platão'
}
const frase4 = {
    frase: "Pessimismo leva à fraqueza, otimismo ao poder.",
    autor: 'William James'
}
const frase5 = {
        frase: "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    autor: 'Helen Keller'
}

const lista = [frase1,frase2,frase3,frase4,frase5]
// console.log(lista)

const botaoRandom = document.querySelector('#botao-random')
// console.log(botaoRandom)
botaoRandom.addEventListener('click',function(){
    // console.log('Evento Acionado')
    // console.log(numberRandom(1,5))
    let num = numberRandom(1,5) - 1

    let fraseRandom = document.querySelector('.frase-random')
    let autor = document.querySelector('.autor')
    // console.log(fraseRandom, autor)

    let frase = lista[num][1]

    fraseRandom.innerHTML = lista[num].frase
    autor.innerHTML = lista[num].autor
})

function numberRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}