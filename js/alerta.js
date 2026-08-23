// Modulo de alertas criticos - Painel Linha 3

let limite = 80;

function verificarAlerta(temperatura, pressao, vibracao) {
  var status = "";
  
  if (temperatura > limite) {
    status = "ALERTA: temperatura alta"
    console.log(status)
  }

  if (pressao > 150) {
    status = "ALERTA: pressao alta"
    console.log(status)
  }

  if (vibracao > 10) {
    status = "ALERTA: vibracao alta"
    console.log(status)
  }

  return status;
}

function enviarNotificacao(msg) {
  // TODO: integrar com sistema de notificacao real
  console.log("Notificando: " + msg)
}

function processarLeitura(dados) {
  const alerta = verificarAlerta(dados.temperatura, dados.pressao, dados.vibracao)
  enviarNotificacao(alerta)
}

module.exports = { verificarAlerta, processarLeitura }
