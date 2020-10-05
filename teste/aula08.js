const json = require('./json')
const {
  listarPets, 
  cadastrarPet, 
  validaDados} = require('./funcoes')

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

let objPetTeste = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

//listarPets(pets)
//cadastrarPet(pets ,objPetTeste)




// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
// que está na linha 86
let objPet = {
  nome: 'Novo Pet',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

let objPet2 = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

// desafio cumprido utilizando metodo do nosso colega Orlando que tem o propósito de retornar
// a quantidade e o nome de cada pet vacinado e também não vacinado em apenas uma função
const vacinadosOrlando = (pets) => {
  let petsVacinados = [];
  let petsNaoVacinados = [];
  let numPetVac = 0;
  let numPetNVac = 0;

  for(let i = 0; i < pets.length; i++){
    if(pets[i].vacinado){
      petsVacinados.push(pets[i].nome);
      numPetVac = numPetVac + 1;
    } else{
      petsNaoVacinados.push(pets[i].nome)
      numPetNVac = numPetNVac + 1;
    }
  }
  console.log("Pets Vacinados: ("+numPetVac+")");
  console.log("Essa é a lista de animais vacinados: " + petsVacinados);

  console.log("Pets NÃO Vacinados: ("+numPetNVac+")");
  console.log("Essa é a lista de animais não vacinados: " + petsNaoVacinados);
}

// vacinadosOrlando(pets);

// funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais nao vacinados
const naoVacinados = (array) => {
  let vacinados= [];
  for(let i in array){
    if(!array[i].vacinado) vacinados.push(array[i]);
  }

  console.log(vacinados)
}

// funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais vacinados
const vacinados = (array) => {
  let vacinados= [];
  for(let i in array){
    if(array[i].vacinado) vacinados.push(array[i]);
  }

  console.log(vacinados)
}

// naoVacinados(pets)
// vacinados(pets)

// callbacks
const calcular = (numero1, numero2, operacao) => {
  operacao(numero1, numero2)
  console.log("A operação foi realizada com sucesso")
}

const soma = (numero1, numero2) => {
  console.log(numero1 + numero2)
}

const subtrai = (numero1, numero2) => {
  console.log(numero1 - numero2)
}

const divide = (numero1, numero2) => {
  console.log(numero1 / numero2)
}

const multiplica = (numero1, numero2) => {
  console.log(numero1 * numero2)
}
// calcular(10, 5, soma)

// Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: dar banho no pet e tosar o pet
// sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
const servicosPrestados = (pet, servico) => {
    servico(pet)
}

const darBanhoNoPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de banho realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " tomou banho")
}

const tosarPet = (pet) => {
  let dataDoServico = new Date()
  dataDoServico = dataDoServico.getDate() + "/" + (dataDoServico.getMonth() + 1) + "/" + dataDoServico.getFullYear()
  pet.servicos.push("Serviço de tosa realizado em " + dataDoServico)
  console.log("O pet " + pet.nome + " foi tosado")
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos

const cadastrarPetsDoJsonSpreadOperator = (lista, json) => {
  let arrayPets = JSON.parse(json)
  lista.push(...arrayPets)
  return lista
}

const cadastrarPetsDoJsonFor = (lista, json) => {
  let arrayPets = JSON.parse(json)
  for (let i = 0; i < arrayPets.length; i++) {
    lista.push(arrayPets[i])
  }
  return lista
}

// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))
// console.log(cadastrarPetsDoJsonFor(pets, json))

// Desafio - filtrar todos pets com um determinado nome, ou, se não encontrar nenhum pet para retornar
// exibir uma mensagem de que não encontrou nenhum pet com aquele nome informado
const filtraPetPorNome = (nome) => {
  let petsFiltrados = pets.filter((pet) => {
    return pet.nome == nome
  })

  if(petsFiltrados.length == 0){
    return "Nenhum pet foi encontrado com o nome " + nome
  } else {
    return petsFiltrados
  }
}

// console.log(filtraPetPorNome('Yoshi'))

// Desafio 1 - aprimorar a função para passar o ID como primeira propriedade
// dá para resolver utilizando o spread operator para criar um objeto e depois de
// adicionar o id ai sim unimos com o restante do objeto que estamos recebendo com
// todas as outras propriedades, podemos avaliar o resultado na função cadastrarPet

// Desafio 2 - de remover um pet especifico
const removerPet = (id) => {
  let pet = pets.filter((pet) => {
    return pet.id != id
  })

  if(pet.length != 0){
    pets.splice(id - 1, 1)
    console.log(pets)
  } else {
    console.log("Nenhum pet foi encontrado com o id " + id)
  }
}

// removerPet(1)

// Desafio 3 - de alterar um pet especifico
const atualizaPet = (id, objeto) => {
  let pet = pets.find(pet => pet.id == id)

  for(var propriedade in objeto){
    if(propriedade == "nome"){
      pet.nome = objeto[propriedade]
    }

    if(propriedade == "tipo"){
      pet.tipo = objeto[propriedade]
    }

    if(propriedade == "raca"){
      pet.raca = objeto[propriedade]
    }

    if(propriedade == "idade"){
      pet.idade = objeto[propriedade]
    }

     if(propriedade == "vacinado"){
      pet.vacinado = objeto[propriedade]
    }
  }
  console.log(pet)
}

let objetoPetAtualizado = {
  nome: "Atualizando Nome",
  tipo: "Atualizando Tipo",
  raca: "siames",
  idade: 3,
  genero: "Fêmea",      
  vacinado: false
}

// atualizaPet(2, objetoPetAtualizado)