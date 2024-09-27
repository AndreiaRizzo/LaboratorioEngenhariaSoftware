class Tarefa {
    constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
        this.status = 'Pendente';
    }

    concluir() {
        this.status = 'Concluída';
    }

    detalhes() {
        return `Nome: ${this.nome}\nDescrição: ${this.descricao}\nStatus: ${this.status}`;
    }
}

class GerenciadorDeTarefas {
    #tarefas = [];

    adicionarTarefa(tarefa) {
        this.#tarefas.push(tarefa);
        this.listarTarefas();
    }

    listarTarefas() {
        const lista = document.getElementById('listaTarefas');
        lista.innerHTML = '';
        this.#tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${tarefa.nome}</strong> - ${tarefa.status}
                <button onclick="gerenciador.visualizarDetalhes(${index})">Detalhes</button>
                <button onclick="gerenciador.marcarComoConcluida(${index})">Concluir</button>
                <button onclick="gerenciador.removerTarefa(${index})">Remover</button>
            `;
            lista.appendChild(li);
        });
    }

    marcarComoConcluida(index) {
        this.#tarefas[index].concluir();
        this.listarTarefas();
    }

    removerTarefa(index) {
        this.#tarefas.splice(index, 1);
        this.listarTarefas();
    }

    visualizarDetalhes(index) {
        alert(this.#tarefas[index].detalhes());
    }
}

const gerenciador = new GerenciadorDeTarefas();

document.getElementById('formTarefa').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const novaTarefa = new Tarefa(nome, descricao);
    gerenciador.adicionarTarefa(novaTarefa);
    document.getElementById('formTarefa').reset();
});
