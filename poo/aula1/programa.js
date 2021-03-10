class Imc{
    constructor (pesoParm, alturaParam){
        this.peso = pesoParm;
        this.altura = alturaParam;
    }
    massaCorporal (){
        return this.peso / (this.altura*this.altura);
    }

    situacaoPeso(){
        let massaCorporal = this.massaCorporal;
        if(massaCorporal < 18.5){
            return 'Abaixo do peso';
        } else if(massaCorporal >= 18.5 && massaCorporal < 24.9){
            return "Peso Ideal"
        } else{
            return 'Acima do Peso'
        }
    }
}

let imc = new Imc(85,1.70);
console.log(imc.massaCorporal());
console.log(imc.situacaoPeso()) 
