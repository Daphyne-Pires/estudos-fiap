const carrosDOM = document.querySelector("#carros");

const veiculos = [
    "Chevrolet",
    "Ford",
    "Fiat",
    "Vw",
    "Honda",
    "Toyota",
    "Hyundai",
];
//adicione no final do array
veiculos.push("BMW");

//adicione no inicio do array
veiculos.unshift("Audi");

//removendo do inicio do array
const primeiro = veiculos.shift();
console.log("Removendo o primeiro elemento do array", primeiro);

//removendo do final do array
const final = veiculos.pop();
console.log("Removendo o ultimo elemento do array", final);

//removendo um elemento do array
const posicao = 2;
const removido = veiculos.splice(posicao, 1);

//removendo mais de um elemento do array
const removidos = veiculos.splice(1, 2);

//removendo e adicionando elementos do array
const removido2 = veiculos.splice(1, 2, "Ferrari", "Lamborghini");

//veiculos.forEach((value,key) => {
//  carrosDOM.innerHTML += `<option value ="${key}">"${value}</option>`;
//});

//join
cidade = [4550] "São Bernardo do Campo";
uf= [26] "São Paulo";

const local = [cidade[4550],uf[26]].join(",");// o join junta os elementos do array e transforma numa string. "São Bernardo do Campo, São Paulo"



//slice é um novo array. - retorna um novo array, o primeiro parametro é opcional, e começa em zero.
// o ultimo paramentro determina até onde deve ser filtrado, porém excluindo este último.
const frutas = frutas.slice(posição)
//split divide uma string. ele divide de acordo com o delimitador que colocamos.
const frase= "Bem vindo";
const arrayFrase = frase.split(" ");// ele vai cortar a frase no espaço e vai ser dividido em "Bem" "Vindo", transformando em um array.


//imutabilidade - quando os dados não mudam, ele evolui.

//splice - remove e adiciona elementos. splice é o proprio array.
//const frutas = frutas.splice(posição,quantidade);
const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"];

const newNba = nbaTeams.slice(-1);
console.log(nbaTeams.slice(3,5));
console.log(newNba, "ultimo");




// map, filter, reduce, find, findIndex, search, sort, reverse, split, join, substring


const name = "Glaucio Daniel Souza Santos";
const nameArray = name.split("");// divide uma string de acordo com o delimitador que você colocar.
const nameComplete = [nameArray[0], nameArray.slice(-1)].join("");
console.log(nameComplete);


const procuraCeltic = (nomeTime) => {
  return  nomeTime == 'Celtics' || nomeTime == "Raptors";
};

const celticsMap = nbaTeams.map(procuraCeltic);//map - retorna um novo array, mapeando e buscando no array anterior.
const celticsFilter = nbaTeams.filter(procuraCeltic); // retorna um novo array, procura do começo ao fim do array anterior, quem retornou true para a função usada.
const celticsFind = nbaTeams.find(procuraCeltic); // retorna a primeira ocorrência de uma busca com o parÇametro que função determinou.
console.log(celticsMap, "map");
console.log(celticsFilter, "filter");
console.log(celticsFind, "Find");
