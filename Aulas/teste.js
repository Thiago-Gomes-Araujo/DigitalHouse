function somar (a,b)
{
    let c = a+b;
    return c;
};

function calculadora(a,b,g)
{
    let d = g(a,b);
    return d;
};
console.log(calculadora(20,4,somar));
