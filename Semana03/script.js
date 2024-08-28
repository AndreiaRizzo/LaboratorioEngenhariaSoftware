
let users = [];
document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os valores do formulário
    let name = document.getElementById('name').value;
    let idade = document.getElementById('idade').value;
    let corFav = document.getElementById('corFav').value;

    // Adiciona o novo usuário ao array
    users.push({ name, idade, corFav });

    // Ordena o array por nome
    users.sort((a, b) => a.name.localeCompare(b.name));

    // Limpa os campos do formulário
    document.getElementById('userForm').reset();
});

document.getElementById('viewListButton').addEventListener('click', function () {
    // Atualiza a lista no HTML
    updateUserList();
})


function updateUserList() {
    let userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpa a lista

    users.forEach(user => {
        let li = document.createElement('li');
        li.textContent = `${user.name} possui ${user.idade} anos e sua cor favorita é ${user.corFav}`;
        userList.appendChild(li);
    });
}
