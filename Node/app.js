//console.log("eu")
// importando Modulo Nativo
const fs = require('fs');
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');
//console.log(dados)

// importando Modulo Instalado
const moment = require('moment');
let data = moment().format('MMM do YY')
//console.log(data);

// importando Modulo Criado
const series = require('./series');
//console.log(series);

const cachorro = require('./cachorro');

console.log("O cachorro se chama "+cachorro.nome+" e tem "+cachorro.idade+" anos");