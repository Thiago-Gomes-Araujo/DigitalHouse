// Desestruturacao de um objeto literal
let pessoa = 
{
    nome: "Thiago",
    altura: 1.79

};
const {nome, altura} = pessoa;
//console.log(nome);
//console.log(altura);

// Desestruturacao de uma Array
//let lista = ['pão', 'manteiga', 'açucar'];
//const [item1, item2, item3] = lista;
//console.log(item1);
//console.log(item2);
//console.log(item3);

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
const [marreucos, bariloche, barcelona, china, grecia] = destinosIncriveis;
console.log(bariloche);
console.log(china);



