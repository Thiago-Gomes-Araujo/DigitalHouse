const aulahj = require('./aulahj')

// let organizacao = "PetShop Node"
//let pets = ['Yosi', 'Pituco'];
//
//for(const i of pets)
//{
//    console.log(i);
//};

//Listar de Objetos
let pets = [
    {
        nome: 'Yoshi',
        tipo: 'cachorro',
        raca: 'RND',
        idade: 6,
        genero: 'Masculino',
        vacinado: true,
        servicos: []

    },

    {
        nome: 'Pituco',
        tipo: 'passaro',
        raca: 'calopsita',
        idade: 2,
        genero: 'Masculino',
        vacinado: false,
        servicos: []
    },
];

//Listar Pets(objetos)
function listarPets()
{
    for (let i = 0; i < pets.length; i++) 
    {
        console.log("Nome: "+pets[i].nome);
        console.log("Tipo: "+pets[i].tipo);
        console.log("Raça: "+pets[i].raca);
        console.log("Idade: "+pets[i].idade);
        console.log("Gênero: "+pets[i].genero);
    };
};

// Vericar Pest Vacinados
function vacinadoPets()
{
    for (let i = 0; i < pets.length; i++) 
    {
        if(pets[i].vacinado == true)
        {
            console.log("Animais Vacinados:")
            console.log(pets[i].nome)
        };

        if(pets[i].vacinado == false) 
        {  
            console.log("Animais que precisam de ser Vacinados:")
            console.log(pets[i].nome)
        };  
    }
};

//Validar Dados
function validaDados(novoPet)
{
    return(novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado);
}


//CadastrarPets(Objetos)
function CadastrarPets(objetoPet)
{
    // verificar Tipo da variavel
    if(typeof objetoPet == "object")
    {
        if (validaDados(objetoPet))
        {
            pets.push(objetoPet);
            console.log(pets)
        }
        else
            console.log("Objeto não tem todas as propriedades necessárias")       
    }
    else
         console.log("Insira um Objeto Válido");
};

let objPet ={
    nome: 'Novo Pet',
    tipo: 'desconhecido',
    raca: 'desconhecido',
    idade: 'desconhecido',
    genero: 'desconhecido',
    vacinado: true,
    
};

function servicos(pet, servico)
{
    servico(pet)
};
function darBanhoNoPet(pet)
{
    pet.servicos.push("banho");
    console.log("O pet "+ pet.nome)
}

function cadastrarPetsDoJson(lista, aulahj)
{
    let arrayPets = JSON.parse(aulahj);
    console.log(arrayPets[0].nome);
}

//let objPet = "Sou uma frase";
//CadastrarPets(objPet);
//listarPets();
//CadastrarPets(objPet);
//vacinadoPets();
//console.log(aulahj);
//console.log(JSON.parse(aulahj));
cadastrarPetsDoJson(pets, aulahj);