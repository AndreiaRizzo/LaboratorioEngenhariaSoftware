//semana 01
function parImpar() {
    
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero); // Converte a entrada para um número inteiro

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        
        if (numero % 2 === 0) {
            alert("O número " + numero + " é par.");
        } else {
            alert("O número " + numero + " é ímpar.");
        }
    }
}


// Função para verificar se um número é primo
function verificarPrimo() {
    // Solicita ao usuário um número inteiro positivo
    let numero = prompt("Digite um número inteiro positivo:");

    // Converte a entrada para um número inteiro
    numero = parseInt(numero);

    // Verifica se o número é válido (inteiro e positivo)
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        // Verifica se o número é primo
        if (ehPrimo(numero)) {
            alert("O número " + numero + " é primo.");
        } else {
            alert("O número " + numero + " não é primo.");
        }
    }
}

function ehPrimo(num) {
    if (num === 1) return false; // 1 não é primo
    if (num === 2) return true;  // 2 é o único número par primo
    if (num % 2 === 0) return false; // Números pares maiores que 2 não são primos

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true;
}

// Função para calcular o fatorial de um número
function calcularFatorial() {
    // Solicita ao usuário um número inteiro positivo
    let numero = prompt("Digite um número inteiro positivo:");

    // Converte a entrada para um número inteiro
    numero = parseInt(numero);

    // Verifica se o número é válido (inteiro e positivo)
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        // Calcula o fatorial
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        
        // Exibe o resultado
        alert("O fatorial de " + numero + " é " + fatorial + ".");
    }
}

// Função para solicitar um dado e verificar o tipo
function verificarTipoDado() {
    // Solicita ao usuário a entrada de um dado
    let dado = prompt("Digite qualquer valor:");

    // Pergunta se o usuário deseja verificar o tipo do dado
    let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");

    // Se o usuário confirmar, exibe o tipo do dado no corpo da página
    if (desejaVerificar) {
        let tipoDado = typeof dado;
        document.body.innerHTML += `<p>O tipo do dado informado é: ${tipoDado}</p>`;
    } else {
        // Caso contrário, exibe uma mensagem de agradecimento
        document.body.innerHTML += "<p>Obrigado por visitar esta página.</p>";
    }
}

//semana 02
