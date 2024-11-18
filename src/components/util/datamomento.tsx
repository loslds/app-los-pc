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
   let data = moment.locale('PT-BR');
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


export function TempoGastoDatIni(DatIni?: string, DatFim?: string): string {
  if (!DatIni) {
    return "Data inicial não fornecida.";
  }

  const dataHoraInicio = new Date(DatIni);
  const dataHoraFim = DatFim ? new Date(DatFim) : new Date(); // Usa a data atual se DatFim não for fornecida

  // Verifica se ambas as datas são válidas
  if (isNaN(dataHoraInicio.getTime())) {
    return "Data inicial inválida.";
  }
  if (isNaN(dataHoraFim.getTime())) {
    return "Data final inválida.";
  }

  // Calcula a diferença em milissegundos
  const diferenca = dataHoraFim.getTime() - dataHoraInicio.getTime();

  if (diferenca < 0) {
    return "A data final não pode ser anterior à data inicial.";
  }

  // Converte para horas, minutos e segundos
  const horas = Math.floor(diferenca / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return `${horas}h ${minutos}m ${segundos}s`;
}
