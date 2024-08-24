//semana 02

function formatarData() {
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const dataAtual = new Date();
    const diaSemana = diasSemana[dataAtual.getDay()];
    const dia = dataAtual.getDate();
    const mes = mesesAno[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}


function atualizarRelogio() {
    const horaAtual = new Date();
    const horas = String(horaAtual.getHours()).padStart(2, '0');
    const minutos = String(horaAtual.getMinutes()).padStart(2, '0');
    const segundos = String(horaAtual.getSeconds()).padStart(2, '0');

    const horario = `${horas}:${minutos}:${segundos}`;
    document.getElementById("horaAtual").innerText = horario;

    setTimeout(atualizarRelogio, 1000);
}

document.getElementById("dataAtual").innerText = formatarData();
atualizarRelogio();

function verificarPalindromo() {
    const texto = document.getElementById("textoInput").value.trim(); //a função trim remove espaços em brancos no inicio ou final

    if (texto === "") {
        alert("Por favor, digite uma palavra ou frase.");
    return; // Sai da função se o campo estiver vazio
    }

    // Função que remove espaços, acentos e converte para minúsculas
    function formatarTexto(str) {
        return str
            .toLowerCase()
            .replace(/\s+/g, '') // Remove espaços
            .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove acentos
    }

    const textoFormatado = formatarTexto(texto);
    const textoInvertido = textoFormatado.split('').reverse().join('');

    if (textoFormatado === textoInvertido) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo!");
    }
}

// Adiciona o evento de clique ao botão
document.getElementById("verificarBtn").addEventListener("click", verificarPalindromo);

