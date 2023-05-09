/* # Exercício 2
Declare e invoque as funções abaixo:*/

//a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.
const soma = (numero1, numero2) => {
    console.log(numero1 + numero2)
}

soma(5,10)
soma(32,44)

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
const verificaMaiorIgual = (numero1, numero2) => {
    console.log(numero1 >= numero2);
}

verificaMaiorIgual(5,10)
verificaMaiorIgual(45,20)

//c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.
const verificaParidade = (numero) => {
    console.log(numero % 2 === 0)
}

verificaParidade(5)
verificaParidade(6)

//d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.
const salarioLiquido = (salarioBruto) => {
    console.log(salarioBruto * 0.90)
}

salarioLiquido(Number(2000))
salarioLiquido(Number(5500))