export function GetStrLoginPsw(modo: number) {
  /**5 retornar chave de enviar para email */
  var rtnPsw = '';
  var tamanho = 0;
  /**5 retornar chave de enviar para email */
  if (modo === 5) {
    tamanho = 8;
  }
  /**6 retornar chave de enviar para sms */
  if (modo === 6) {
    tamanho = 6;
  }
  /**7 retornar chave de enviar para Codigo Seguro */
  if ((modo = 7)) {
    tamanho = 62;
  }

  const tmnh = tamanho;
  if (tmnh == 0 || null || undefined) {
    return rtnPsw;
  }
  var caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (const i = 0; i <= tmnh; i + 1) {
    rtnPsw += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return rtnPsw;
}

/////////////////////////////////////////////////////

export function GeraStrAleatoria(tamanho: number) {
  var strAleatoria = '';
  var nrtnho = tamanho;
  if (nrtnho == 0 || null || undefined) {
    nrtnho = 62;
  }
  const tmnh = nrtnho;
  var caracteres =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (const i = 0; i <= tmnh; i + 1) {
    strAleatoria += caracteres.charAt(
      Math.floor(Math.random() * caracteres.length)
    );
  }

  return strAleatoria;
}

//////////////////////////////////////////////////

export function GeradorSnhForte() {
  var rtnSnhF = '';
  const tmho = 12;
  var caracteres =
    '!#$&+-.<=>@^_ABCDEFGHIJKLMNOPQRSTUVXWYZabcdefghijklmnopqrstuvxwyz0123456789';
  for (const i = 0; i <= tmho; i + 1) {
    rtnSnhF += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }

  return rtnSnhF;
}
