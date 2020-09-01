//lenght
//let texto = "eu";
//console.log(texto.length);

//indexOf
//function menciona(texto, palavra)
//{
//    texto.indexOf("Existem muitas linguagens de programação e javascript é uma delas");
//    palavra.indexOf("programação");
//    return true;
//
//}
//menciona("Existem muitas linguagens de programação e javascript é uma delas","programação");

//slice
//let a = "Olá, sou Carlos!"; 
//let nomeUsuario = a.slice(9,15);
//console.log(nomeUsuario);
//
//trim
//remover espaços em brancos antes ou de frases

//replace
//function substituicaoRapida(g,i,h)
//{
//    let textoNovo = g.replace(i,h);
//    return textoNovo;
//}
//let x = substituicaoRapida("Boa tarde","tarde","noite");
//console.log(x);


function dominio(w)
{
    let textoNovo = "http://"+w;
    
    return textoNovo;
    
}
let x = dominio("br.digitalhouse.com");
console.log(x);
