
//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

const saudacao = NOME => {
	console.log("Olá, " + NOME + "!");
};

saudacao("Henrique");

//b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

const tabuada = function (numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}



tabuada(5);
tabuada(3);
tabuada(7);