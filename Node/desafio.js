const moment = require('moment');
const dataAntiga = moment('2005-09-15');
const dataAtual = moment('2020-09-15');
const dia = dataAtual.diff(dataAntiga,'day');
const mes = dataAtual.diff(dataAntiga,'month');
//const dataAtual = moment();

console.log('Entre as datas '+ dataAntiga.format('DD/MM/YYYY')+
' e '+dataAtual.format('DD/MM/YYYY') +' ser passaram '+ dia+' dias');
console.log('Entre as datas '+ dataAntiga.format('DD/MM/YYYY')+
' e '+dataAtual.format('DD/MM/YYYY') +' ser passaram '+ mes+' meses');

