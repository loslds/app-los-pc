
export function Geradorstraleatorio( modo : number, tamanho : number) {
  /**5 retornar chave de enviar para email */
  /**5 retornar chave de enviar para email */
  var strAleatoria = '';
  var strtmho = tamanho;
  /**5 retornar chave de enviar para email */
  if (modo == 0 || null || undefined) {
    strtmho = 30; 
  } else if (modo === 5){
    strtmho = 8; 
  } else if (modo === 6){
    strtmho = 8; 
  } 
  const tmnh = strtmho;

  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (const i = 0; i <= tmnh; i + 1) {
    strAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  };

  return strAleatoria;
}
