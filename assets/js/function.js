
//diferenças entre arrow function e funções nominais ou expressões de função.
const resultado = document.querySelector("#resultado");

let myFunc1 = {
    ShowArguments() {
    //resultado.innerHTML = arguments;
    //console.log(arguments);
},
};

//chamando a função
myFunc1.ShowArguments(
    "Vai Santos",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let myFunc2 = {
    ShowArguments: () => {
        //resultado.innerHTML = arguments;
        //console.log(...arguments);
    },
};

myFunc2.ShowArguments(
    "Vai Santos",
    "Full-Stack Developer",
    "React",
    "NodeJS",
    "TypeScript"
);

let user ={
    name: "Daphyne",
    usandoArrow: ()=> {
        console.log("Meu nome é", this.name, "Arrow Function");
    },
    usandoNominal () {
        console.log("Meu nome é", this.name, "Nominal Function");

    },
};
user.usandoArrow();
user.usandoNominal();


/**
 
{
    "name:"Daphyne Pires",
    "email":"d.pires.vitorino@avanade.com",
    "password":"123456"
}

const {password, ...data} = await prisma.user.findById(1);

return data;
*/
