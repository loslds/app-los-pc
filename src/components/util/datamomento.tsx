import moment from "moment";

// cria senha master
export function criasmstr() {
  let rtn = moment().format('MM-DD-YYYY');
  console.log('rtn :',rtn);
  return rtn;
}

// moment.locale('pt-BR'); // mudar idioma para português
moment.locale('pt-BR');

export function hojediahora() {
   let data = moment.locale('pt-BR');
console.log('data :', data);

//    let dia = data.format('dddd DD/MM/YYYY');
//    let hora = data.format('h:mm:ss A');
    let diahora =  data;// dia + ' ' + hora;
    
    return diahora;
}

export function DataHora() {
  var dateString = new Date().toLocaleString('PT-BR', {
    timeZone: 'America/Sao_Paulo'
  });
  var formattedString = dateString.replace(', ', ' - ');
  //timeDisplay.innerHTML = formattedString;

  return formattedString;
}