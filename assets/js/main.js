//trabalhando com Javascript em um arquivo externo.
const nome ="Fiap";
console.log(nome, "chamando variavel criada com var");
//nome = "Avanade";

escreve("Exemplo de função nominal");

//função nominal
function escreve(titulo){
  //  alert(titulo);
}

//Existem 4 formas de criar uma função em Javascrip

//Função nominal - sofre hoisting - ela é puxada pra primeira linha
function mudaTitulo(novoTitulo){
document.querySelector("h1").innerHTML = novoTitulo;
}
mudaTitulo("Vai Santos!");
//expressão de função - Function Expression
//Uma função que é armazenada em uma variável é chamada de expressão de função

//função anônima - uma função que tem a palavra function mas não tem nome

const mudaTitulo2 = function (target, novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo;

};

//mudaTitulo2("h1", "Trocando o subtitulo");

//Arrow Function - É uma função criada no ES6 ou Es2015.
//não existe o this dentro de uma arrow function.
//não existe um método construtor.
//sintaxe mais simples e prática.
const relogio = () =>{
    const date = new Date();
    mudaTitulo2("h2", date.toLocaleTimeString());
}

setInterval(relogio, 1000);

//setInterval(() => {}, tempo);

const frases = [
  "A vida é bela",
  "A vida é curta",
  "A vida é uma dádiva"
];

 const mudaFrase = (alvo, texto, tempo) => {

 let total = 2;
setInterval(()=> {
    document.querySelector(alvo).innerHTML = texto[total >=texto.length - 1 ? (total = 0): (total +=1)]}, tempo*1000);

}

mudaFrase("h1", frases, 4);