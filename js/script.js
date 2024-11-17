// Função para validar a reserva
function validarReserva() {
    alert("Reserva feita com sucesso!");
    return false;  // Só para impedir o envio, remova para envio real
  }
  
  // Função para validar o formulário de contato
  function validarContato() {
    alert("Mensagem enviada com sucesso!");
    return false;  // Só para impedir o envio, remova para envio real
  }
  
  // Função para atualizar promoções dinamicamente
  function atualizarPromocoes() {
    const promoBanner = document.getElementById('promocao-banner');
    const dia = new Date().getDay();
    let promocao;
  
    switch (dia) {
      case 1: promocao = "Segunda-feira: Desconto de 10% no prato X"; break;
      // Adicione promoções para os outros dias
      default: promocao = "Aproveite nossas promoções!";
    }
    
    promoBanner.innerText = promocao;
  }
  window.onload = atualizarPromocoes;
  