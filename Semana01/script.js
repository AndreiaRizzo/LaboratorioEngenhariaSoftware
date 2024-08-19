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

function ehPrimo(num) {
    if (num === 1) return false; 
    if (num === 2) return true;  
    if (num % 2 === 0) return false; 

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    
    return true;
}
// Math.sqrt é uma função embutida em JavaScript que retorna a raiz quadrada de um número

function verificarPrimo() {
  
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    // Verifica se o número é válido (inteiro e positivo)
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        
        if (ehPrimo(numero)) {
            alert("O número " + numero + " é primo.");
        } else {
            alert("O número " + numero + " não é primo.");
        }
    }
}




function calcularFatorial() {
    
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo válido.");
    } else {
        
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + numero + " é " + fatorial + ".");
    }
}


function verificarTipoDado() {
    let dado = prompt("Digite qualquer valor:");
    let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
    
  
    if (desejaVerificar) {
        let tipoDado;

        // Tenta converter para número
        if (!isNaN(dado) && dado.trim() !== "") {
            // Verifica se é um número inteiro
            if (Number.isInteger(Number(dado))) {
                tipoDado = "Number (Inteiro)";
            } else {
                tipoDado = "Number (Float)";
            }
        } else {
            tipoDado = typeof dado;
        }

        // Exibe o tipo do dado no corpo da página
        document.body.innerHTML += `<p class='mensagem'>O tipo do dado informado é: ${tipoDado}</p>`;
    } else {
        // Caso contrário, exibe uma mensagem de agradecimento
        document.body.innerHTML += "<p class='mensagem'>Obrigado por visitar esta página.</p>";
    }
}



