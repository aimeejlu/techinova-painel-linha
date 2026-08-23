// Modulo de alertas criticos - Painel Linha 3

const LIMITE_TEMPERATURA_MAX = 80; // graus Celsius
const LIMITE_PRESSAO_MAX = 150; // psi
const LIMITE_VIBRACAO_MAX = 10; // mm/s

function verificarAlerta(temperatura, pressao, vibracao) {
  let alertas = [];

  if (temperatura > LIMITE_TEMPERATURA_MAX) {
    alertas.push("ALERTA: temperatura alta");
  }

  if (pressao > LIMITE_PRESSAO_MAX) {
    alertas.push("ALERTA: pressao alta");
  }

  if (vibracao > LIMITE_VIBRACAO_MAX) {
    alertas.push("ALERTA: vibracao alta");
  }

  return alertas;
}

function enviarNotificacao(msg) {
  // TODO: integrar com sistema de notificacao real
  console.log("Notificando: " + msg);
}

function processarLeitura(dados) {
  const alertas = verificarAlerta(dados.temperatura, dados.pressao, dados.vibracao);
  
  if (alertas.length > 0) {
    alertas.forEach(alerta => enviarNotificacao(alerta));
  }
}

module.exports = { verificarAlerta, processarLeitura };
