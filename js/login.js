function validateForm() {
  var email = document.getElementById('floatingEmail').value;
  var password = document.getElementById('floatingPassword').value;
  var messages = [];

  if (email === '') {
      messages.push('Por favor, insira um endereço de email.');
  }

  if (password === '') {
      messages.push('Por favor, insira sua senha.');
  }

  if (messages.length > 0) {
      alert(messages.join('\n'));
      return false; // Impede o envio do formulário
  }

  return true; // Permite o envio do formulário
}

$(document).ready(function() {
  $('#toggleButton').click(function() {
    $('#myDivCadastro1, #myDivCadastro2, #myDivCadastro3, #myDivCadastro4, #myDivCadastro5, #myDivCadastro6').toggleClass('d-none');
    if ($('#myDivCadastro1').hasClass('d-none')) {
      $('#toggleButton').text('Cadastrar');
      $('#booton-Entrar-Cadastrar').text('Entrar');
      $('#titleLogin').text('Login');
    } else {
      $('#toggleButton').text('Login');
      $('#booton-Entrar-Cadastrar').text('Cadastrar');
      $('#titleLogin').text('Cadastrar');
    }
  });

  // Aplicar máscara de CPF
  $('#floatingCPF').mask('000.000.000-00');
  $('#floatingTelefone').mask('(00)00000-0000');
});