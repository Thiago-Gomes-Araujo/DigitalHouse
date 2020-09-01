//function dobro (a)
//{
//    let c = a*2;
//    return c;
//};
//function triplo (a)
//{
//    let c = a*3;
//    return c;
//};
//function aplicar(a, b)
//{
//    let d = b(a);
//    return d;
//}
//console.log(aplicar(3,dobro));
//console.log(aplicar(4,triplo));

//function somar (a,b)
//{
//    let c = a+b;
//    return c;
//};
//function subtrair (a,b)
//{
//    let c = a-b;
//    return c;
//};
//function multiplicar (a,b)
//{
//    let c = a*b;
//    return c;
//};
//function dividir (a,b)
//{
//    let c = a/b;
//    return c;
//};
//function calculadora(a,b,g)
//{
//    let d = g(a,b);
//    return d;
//};
//console.log(calculadora(20,4,somar));
//console.log(calculadora(10,2,dividir));
//console.log(calculadora(20,4,subtrair));
//console.log(calculadora(10,2,multiplicar));
//
function adicionarHttp(a)
{
    let url = "http://"+ a;
    return url;
};
function processar(a,b)
{
    let k = (b(a[0]));
    let m = (b(a[1]));
    let h = [k,m]
   return h;
    //for (let i = 0; i < a.length; i++)
    //{
    //   
    //    //let d = 
    //    console.log(b(a[i]))   
    //}   
}
let l = processar(["www.google.com","www.yahoo.com"],adicionarHttp);
console.log(l)
