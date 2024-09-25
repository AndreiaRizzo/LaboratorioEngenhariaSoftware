document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('form-cadastro');

  function validarNome() {
    const nome = document.getElementById('nome');
    const erroNome = document.getElementById('nome-erro');
    const regexNome = /^[a-zA-Z]+\s[a-zA-Z]+$/;

    if (!regexNome.test(nome.value)) {
      erroNome.style.display = 'block';
    } else {
      erroNome.style.display = 'none';
    }
  }

  function validarEmail() {
    const email = document.getElementById('email');
    const erroEmail = document.getElementById('email-erro');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email.value)) {
      erroEmail.style.display = 'block';
    } else {
      erroEmail.style.display = 'none';
    }
  }

  function validarData() {
    const dataNascimento = document.getElementById('data-nascimento');
    const erroData = document.getElementById('data-nascimento-erro');
    const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regexData.test(dataNascimento.value)) {
      erroData.style.display = 'block';
    } else {
      erroData.style.display = 'none';
    }
  }

  // Máscara para telefone fixo: (xx)xxxx-xxxx
  function mascaraTelefoneFixo(telefone) {
    let valor = telefone.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    valor = valor.replace(/^(\d{2})(\d)/g, "($1)$2"); // Coloca parênteses em volta dos dois primeiros dígitos
    valor = valor.replace(/(\d{4})(\d)/, "$1-$2"); // Coloca um traço entre o quarto e o quinto dígito
    telefone.value = valor;
  }

  // Máscara para telefone celular: (xx)xxxxx-xxxx
  function mascaraTelefoneCelular(telefone) {
    let valor = telefone.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    valor = valor.replace(/^(\d{2})(\d)/g, "($1)$2"); // Coloca parênteses em volta dos dois primeiros dígitos
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca um traço entre o quinto e o sexto dígito
    telefone.value = valor;
  }

  function validarTelefoneFixo() {
    const telefoneFixo = document.getElementById('telefone-fixo');
    const erroTelefoneFixo = document.getElementById('telefone-fixo-erro');
    const regexTelefoneFixo = /^\(\d{2}\)\d{4}-\d{4}$/;

    if (!regexTelefoneFixo.test(telefoneFixo.value)) {
      erroTelefoneFixo.style.display = 'block';
    } else {
      erroTelefoneFixo.style.display = 'none';
    }
  }

  function validarTelefoneCelular() {
    const telefoneCelular = document.getElementById('telefone-celular');
    const erroTelefoneCelular = document.getElementById('telefone-celular-erro');
    const regexTelefoneCelular = /^\(\d{2}\)\d{5}-\d{4}$/;

    if (!regexTelefoneCelular.test(telefoneCelular.value)) {
      erroTelefoneCelular.style.display = 'block';
    } else {
      erroTelefoneCelular.style.display = 'none';
    }
  }

  function validarMatricula() {
    const matricula = document.getElementById('matricula');
    const erroMatricula = document.getElementById('matricula-erro');
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const regexMatricula = tipo === 'Professor' ? /^\d{5}$/ : /^\d{10}$/;

    if (!regexMatricula.test(matricula.value)) {
      erroMatricula.style.display = 'block';
    } else {
      erroMatricula.style.display = 'none';
    }
  }

  function alternarCampos() {
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const cursoOuArea = document.getElementById('curso-ou-area');
    const lattesContainer = document.getElementById('lattes-container');
    const matriculaContainer = document.getElementById('matricula-container');

    if (tipo === 'Professor') {
      cursoOuArea.querySelector('label').innerText = 'Área de Atuação:';
      cursoOuArea.querySelector('input').setAttribute('placeholder', 'Digite sua área de atuação');
      lattesContainer.style.display = 'block';
      document.getElementById('curso-ou-area').style.display = 'none';
    } else if (tipo === 'Aluno') {
      cursoOuArea.querySelector('label').innerText = 'Curso:';
      cursoOuArea.querySelector('input').setAttribute('placeholder', 'Digite seu curso');
      lattesContainer.style.display = 'none';
      document.getElementById('curso-ou-area').style.display = 'block';
    }
  }

  form.addEventListener('submit', function (event) {
    validarNome();
    validarEmail();
    validarData();
    validarTelefoneFixo();
    validarTelefoneCelular();
    validarMatricula();

    const erros = document.querySelectorAll('.error');
    let temErro = false;
    erros.forEach(erro => {
      if (erro.style.display === 'block') {
        temErro = true;
      }
    });

    if (temErro) {
      event.preventDefault();
    }
  });

  document.getElementById('telefone-fixo').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2');
  });

  document.getElementById('telefone-celular').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  });
});
