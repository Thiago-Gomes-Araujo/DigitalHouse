function adicionarHttp(url) 
{
    let a = "http://"+url;
    return a;
};


function processar(a)
{
    
    for (let i = 0; i < a.length; i++) {
        let c = String(a);
        console.log(c);
    }
    //let d = "http"+c;
   
};
console.log(processar(["20","4"]));



