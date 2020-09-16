const { format, differenceInDays, differenceInMonths } = require('date-fns');

//let data = format(new Date('2020, 9, 15'), 'dd/MM/yyyy')
//console.log(data)

const dataAntiga = new Date('2005/09/15');
const dataAtual = new Date('2020/09/15');
//const dataAtual = new Date();
const dias = differenceInDays(dataAtual, dataAntiga);
const meses = differenceInMonths(dataAtual, dataAntiga);

//console.log(dias);
//console.log(meses); 

console.log('Entre as datas '+format(dataAntiga,'dd/MM/yyyy')+
' e '+format(dataAtual,'dd/MM/yyyy')+' ser passaram '+dias+' dias');

console.log('Entre as datas '+format(dataAntiga,'dd/MM/yyyy')+
' e '+format(dataAtual,'dd/MM/yyyy')+' ser passaram '+meses+' meses');

