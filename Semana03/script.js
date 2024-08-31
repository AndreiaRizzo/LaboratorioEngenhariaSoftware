let users = [];
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let idade = document.getElementById('idade').value;
    
    // Adiciona o novo usuário ao array
    users.push({ name, idade });

    // Ordena o array por nome
    users.sort((a, b) => a.name.localeCompare(b.name));

    // Atualiza a lista no HTML automaticamente
    updateUserList();

    // Limpa os campos do formulário
    document.getElementById('userForm').reset();
});

function updateUserList() {
    let userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpa a lista

    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `${user.name} possui ${user.idade} anos.`;
        userList.appendChild(li);
    });
}
