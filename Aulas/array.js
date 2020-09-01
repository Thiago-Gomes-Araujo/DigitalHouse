
//.push()
//let estudantes = [
//    {
//      nome: 'Álvaro',
//      media : 9,
//      curso : 'Android',
//    },
//    {
//      nome: 'Daniel',
//      media : 6,
//      curso : 'Full Stack',
//    }
//  ]
//    estudantes.push({nome : 'João',media: 5,curso: 'iOS'})
//    console.log(estudantes);
//    estudantes.push({nome : 'Miguel',media: 2,curso: 'Android'})
//    console.log(estudantes);




//.pop()
//let estudantes = [
//    {
//      nome: "Álvaro",
//      media: 9,
//      curso: "Android"
//    },
//    {
//      nome: "Daniel",
//      media: 6,
//      curso: "Full Stack"
//    },
//    {
//      nome: "Alexis",
//      media: 3,
//      curso: "iOS"
//    }
//  ];
  //let alunoFormado = estudantes.pop();
  //console.log(alunoFormado);

  //.join()

let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

//let fraseNova = arrayFrase.join(" ");
//console.log(fraseNova);

//.indexOf()
//let alunos = ["João", "Pedro", "Jorge", "Francisco"];
//let indiceJoao = alunos.indexOf("João");
//let indiceFrancisco = alunos.indexOf("Francisco");
//console.log(indiceJoao);
//console.log(indiceFrancisco);

//.shift()
//let estudantes = [
//    {
//       nome: 'Álvaro',
//       media : 9,
//       curso : 'Android',
//     },
//      {
//        nome: 'Daniel',
//        media : 6,
//        curso : 'Full Stack',
//      },
//      {
//        nome: 'Alexis',
//        media : 3,
//        curso : 'iOS',
//      },
//    ]
//let alunoDesistente = estudantes.shift();
//console.log(alunoDesistente);

//. unshift()
//let estudantes = [
//    {
//      nome: 'Alvaro',
//      media : 9,
//      curso : 'Android',
//    },
//    {
//      nome: 'Daniel',
//      media : 6,
//      curso : 'Full Stack',
//    },
//    {
//      nome: 'Alexis',
//      media : 3,
//      curso : 'iOS',
//    },
//  ];
//console.log(estudantes)
//estudantes.unshift({nome: "Mariana",media: 9,curso: "Full Stack"},{nome: "Francisco",media: 2,curso: "Android"})
//estudantes.unshift({nome: "Francisco",media: 2,curso: "Android"})
//console.log(estudantes)

//
let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];
var maiores = numeros.filter(function(numeros)
{
    return numeros > 18;
});
console.log(maiores);