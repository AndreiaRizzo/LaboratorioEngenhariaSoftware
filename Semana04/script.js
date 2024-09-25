// Classe Pessoa
function Pessoa(nome, email, dataNascimento, telefoneFixo, telefoneCelular) {
  this.nome = nome;
  this.email = email;
  this.dataNascimento = dataNascimento;
  this.telefoneFixo = telefoneFixo;
  this.telefoneCelular = telefoneCelular;
}

// Classe Aluno herda de Pessoa
function Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, curso, matricula) {
  Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
  this.curso = curso;
  this.matricula = matricula;
}

// Classe Professor herda de Pessoa
function Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, area, matricula) {
  Pessoa.call(this, nome, email, dataNascimento, telefoneFixo, telefoneCelular);
  this.area = area;
  this.matricula = matricula;
}

// Validação de nome
function validarNome() {
  const nome = document.getElementById("nome").value.trim(); // Remove espaços no início e no fim
  const erroNome = document.getElementById("nome-erro");
  
  // Regex para validar ao menos dois nomes com letras, espaços, acentos e hífens
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/;
  
  if (nome === "") {
    erroNome.style.display = "block";
    erroNome.textContent = "O campo nome não pode estar vazio.";
  } else if (!regex.test(nome)) {
    erroNome.style.display = "block";
    erroNome.textContent = "Nome inválido! Por favor, insira nome e sobrenome.";
  } else {
    erroNome.style.display = "none";
  }
}


// Validação de email
function validarEmail() {
  const email = document.getElementById("email").value.trim(); // Remove espaços extras
  const erroemail = document.getElementById("email-erro");
  
  // Regex para validação de e-mail (aceita e-mails com letras, números, pontos, hífens e mais)
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (email === "") {
    erroemail.style.display = "block";
    erroemail.textContent = "O campo e-mail não pode estar vazio.";
  } else if (!regex.test(email)) {
    erroemail.style.display = "block";
    erroemail.textContent = "E-mail inválido! Por favor, insira um e-mail válido.";
  } else {
    erroemail.style.display = "none";
  }
}

// Validação de data de nascimento
function validarData() {
  const data = document.getElementById("dataNascimento").value;
  const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
  if (!regex.test(data)) {
    document.getElementById("erroData").style.display = "block";
  } else {
    document.getElementById("erroData").style.display = "none";
  }
}

// Validação de telefone fixo
function validarTelefoneFixo() {
  const telefoneFixo = document.getElementById("telefone-fixo").value;
  const regex = /^\(\d{2}\)\d{4}-\d{4}$/; // Formato: (XX)XXXX-XXXX
  if (!regex.test(telefoneFixo)) {
    document.getElementById("telefone-fixo-erro").style.display = "block";
  } else {
    document.getElementById("telefone-fixo-erro").style.display = "none";
  }
}

// Validação de telefone celular
function validarTelefoneCelular() {
  const telefoneCelular = document.getElementById("telefone-celular").value;
  const regex = /^\(\d{2}\)\d{5}-\d{4}$/; // Formato: (XX)XXXXX-XXXX
  if (!regex.test(telefoneCelular)) {
    document.getElementById("telefone-celular-erro").style.display = "block";
  } else {
    document.getElementById("telefone-celular-erro").style.display = "none";
  }
}

// Formatação automática de telefones
document.getElementById("telefone-fixo").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 10) value = value.slice(0, 10);
  value = value.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1)$2-$3");
  e.target.value = value;
});

document.getElementById("telefone-celular").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  value = value.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1)$2-$3");
  e.target.value = value;
});

// Validação de matrícula
function validarMatricula() {
  const matricula = document.getElementById("matricula").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const regexAluno = /^\d{10}$/; // 10 dígitos para Aluno
  const regexProfessor = /^\d{5}$/; // 5 dígitos para Professor

  if ((tipo === "Aluno" && !regexAluno.test(matricula)) || (tipo === "Professor" && !regexProfessor.test(matricula))) {
    document.getElementById("matricula-erro").style.display = "block";
  } else {
    document.getElementById("matricula-erro").style.display = "none";
  }
}

// Alterna campos entre Professor e Aluno
function alternarCampos() {
  const tipo = document.querySelector('input[name="tipo"]:checked').value;
  const areaOuCurso = document.getElementById("curso-ou-area");
  const lattesContainer = document.getElementById("lattes-container");

  if (tipo === "Aluno") {
    areaOuCurso.querySelector("label").innerText = "Curso:";
    areaOuCurso.querySelector("input").placeholder = "Digite seu curso";
    lattesContainer.style.display = "none";
  } else {
    areaOuCurso.querySelector("label").innerText = "Área:";
    areaOuCurso.querySelector("input").placeholder = "Digite sua área";
    lattesContainer.style.display = "block";
  }
}

// Validação completa do formulário
function validarFormulario(event) {
  event.preventDefault();

  validarNome();
  validarEmail();
  validarData();
  validarTelefoneFixo();
  validarTelefoneCelular();
  validarMatricula();

  if (document.querySelectorAll(".error:visible").length === 0) {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const telefoneFixo = document.getElementById("telefone-fixo").value;
    const telefoneCelular = document.getElementById("telefone-celular").value;
    const matricula = document.getElementById("matricula").value;
    const cursoOuArea = document.getElementById("area").value;

    let pessoa;

    if (tipo === "Aluno") {
      pessoa = new Aluno(nome, email, dataNascimento, telefoneFixo, telefoneCelular, cursoOuArea, matricula);
    } else {
      pessoa = new Professor(nome, email, dataNascimento, telefoneFixo, telefoneCelular, cursoOuArea, matricula);
    }

    console.log(pessoa);
    alert("Dados enviados com sucesso!");
  } else {
    alert("Preencha corretamente todos os campos.");
  }
}
