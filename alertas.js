// Modulo de alertas criticos - Painel Linha 3

const LIMITE_TEMPERATURA_MAX = 80; // graus Celsius
const LIMITE_PRESSAO_MAX = 150; // psi
const LIMITE_VIBRACAO_MAX = 10; // mm/s

function verificarAlerta(temperatura, pressao, vibracao) {
  if (
    typeof temperatura !== "number" ||
    typeof pressao !== "number" ||
    typeof vibracao !== "number"
  ) {
    throw new Error("Dados invalidos: temperatura, pressao e vibracao devem ser numeros");
  }

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
  console.log("Notificando equipe do painel: " + msg);
}

function processarLeitura(dados) {
  if (!dados) {
    throw new Error("Nenhum dado recebido para processamento");
  }

  const alertas = verificarAlerta(dados.temperatura, dados.pressao, dados.vibracao);

  if (alertas.length > 0) {
    alertas.forEach(alerta => enviarNotificacao(alerta));
  }
}

module.exports = { verificarAlerta, processarLeitura };
