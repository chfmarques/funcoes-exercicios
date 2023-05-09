//a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).
const numero1 = Number(prompt("Informe um número"))
const numero2 = Number(prompt("Informe outro número"))

const soma = (numero1, numero2) => {
    return Number(numero1 + numero2)
}

const subtracao = (numero1, numero2) => {
    return Number(numero1 - numero2)
}

const multiplicacao = (numero1, numero2) => {
    return Number(numero1 * numero2)
}

const divisao = (numero1, numero2) => {
    return Number(numero1 / numero2)
}

const resultadoSoma = soma(numero1,numero2)
const resultadoSubtracao = subtracao(numero1,numero2)
const resultadoMultiplicacao = multiplicacao(numero1,numero2)
const resultadoDivisao = divisao(numero1,numero2)

console.log("Resultado da soma: ", resultadoSoma)
console.log("Resultado da subtração: ", resultadoSubtracao)
console.log("Resultado da multiplicação: ", resultadoMultiplicacao)
console.log("Resultado da divisão: ", resultadoDivisao)