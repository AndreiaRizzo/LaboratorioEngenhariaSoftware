document.getElementById("form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();
  // Validar todos os campos
  validarCampos();
});

// Função para verificar mudança no tipo (Aluno/Professor)
document.querySelectorAll('input[name="tipo"]').forEach((input) => {
  input.addEventListener('change', function () {
      if (this.value === 'Aluno') {
          alterarParaAluno();
      } else if (this.value === 'Professor') {
          alterarParaProfessor();
      }
  });
});

function alterarParaAluno() {
  document.getElementById("area").placeholder = "Digite seu curso";
  document.querySelector("label[for='area']").textContent = "Curso:";
  document.getElementById("lattes-container").style.display = "none";
  document.getElementById("matricula-container").style.display = "block";
  document.getElementById("matricula").placeholder = "Digite sua matrícula (10 dígitos)";
}

function alterarParaProfessor() {
  document.getElementById("area").placeholder = "Digite sua área de atuação";
  document.querySelector("label[for='area']").textContent = "Área de Atuação:";
  document.getElementById("lattes-container").style.display = "block";
  document.getElementById("matricula-container").style.display = "block";
  document.getElementById("matricula").placeholder = "Digite sua matrícula (5 dígitos)";
}

function validarCampos() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var telefoneFixo = document.getElementById("telefone-fixo").value;
  var telefoneCelular = document.getElementById("telefone-celular").value;
  var dataNascimento = document.getElementById("data-nascimento").value;
  var matricula = document.getElementById("matricula").value;
  
  // Validar nome completo
  if (!/^[a-zA-Z]+ [a-zA-Z]+$/.test(nome)) {
      document.getElementById("nome-erro").style.display = "block";
  } else {
      document.getElementById("nome-erro").style.display = "none";
  }
  
  // Validação de email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById("email-erro").style.display = "block";
  } else {
      document.getElementById("email-erro").style.display = "none";
  }
  
  // Validação de telefones e outros campos podem seguir da mesma forma...
}
