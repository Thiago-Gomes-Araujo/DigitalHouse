//function ePar(a)
//{
//    let par = a % 2;
//    if (par == 0)
//    {
//        return true;
//    }
//    else
//    return false;
//}    
//let res = ePar(3);
//console.log(res);

//function anterior(a)
//{
//   
//    return a - 1;        
//}
//let res = anterior(4);
//console.log(res)
//
//function triplo(b)
//{
//    
//    return b * 3;        
//}
//let res1 = triplo(4);
//console.log(res1)
//
//function anteriorDoTriplo(c)
//{
//    let a = triplo(c);
//    let b = anterior(a);
//    return b     
//}
//let res2 = anteriorDoTriplo(4);
//console.log(res2)
//let dado = true;
//if (dado == true)
//{
//    console.log("É verdadeiro!");
//}
//else
//    console.log("É falso");
//
//let linguagem = "javascript";
//if (linguagem == "javascript")
//{
//    console.log("Estou aprendendo");
//}
//else
//    console.log("Vou aprender mais pra frente");
//function podePassar(nome)
//{
//    if(nome === "Natalia")
//    {
//        return false;
//    }
//    else 
//        return true;
//}
//let pass = podePassar("Gil");
//console.log(pass)
//



//function fimDeSemana(dia) {
//	switch (dia)
//    {
//        case ("sexta-feira"):
//            console.log('Bom fim de semana!')
//            break;
//
//        case ("segunda-feira"):
//            console.log('Boa semana!')
//            break;
//
//        default:
//            console.log('Bom dia!')
//    }
//}
//fimDeSemana("segunda-feira");
//
//let dia = "sabado";
//
//function fimDeSemana(dia){
//	//criação do switch
//    switch (dia)
//   {
//        case ("segunda-feira"):
//            console.log(" você tem aulas!");
//            break;
//
//        case ("quarta-feira"):
//            console.log(" você tem aulas!");
//            break;
//
//        case ("sexta-feira"):
//            console.log(" você tem aulas!");
//            break;
//
//       default:
//            console.log("você não tem aulas");
//    }
//}
//
//function papagaio(c)
//{
//    for (let i = 1; i <= 5; i++)
//    {
//        console.log(c)
//        
//    };
//}
//papagaio('4');




//function naoPareDeContarImparesAte(numero){
//    var impares = 0;
//   for(i = 0; i < numero; i++){
//    let b = i % 2;
//       if(b != 0){
//           impares = impares + 1;
//       }
//   }
//    return impares;
//}
//let bc = naoPareDeContarImparesAte(5);
//console.log(bc);
//
//var contador = 0;
//while (contador <=4)
//{
//    contador++;
//    console.log("Contador: "+ contador);
//}

//function count(inicio, fim) {
//    
//    while(inicio < fim)
//    {
//        console.log("O número atual é "+inicio+" e é menor que "+fim)
//        inicio++;
//        
//    }        
//}
//count(4,6);
//
//let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function encontreUm5(numeros)
//{
//    do {
//            console.log("Encontramos um 5!");
//     }while( numeros === 5) ;
//}
//
//


function tabelaDeMultiplicacao(numero) {
	let i = 0;
	while (i <10)
    {
        i++;
        let bc = i*numero;
		console.log(numero+" "+"* "+i+" = "+bc);
        
    }
}
tabelaDeMultiplicacao(5);