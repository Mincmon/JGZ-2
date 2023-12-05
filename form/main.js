function toggleForm() {
    var container = document.getElementById('container');
    container.innerHTML = '';

    var form = document.createElement('form');
    form.id = 'loginForm';

    var nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'username';
    nameLabel.textContent = 'Nome:';
    form.appendChild(nameLabel);

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'username';
    nameInput.name = 'username';
    nameInput.required = true;
    form.appendChild(nameInput);

    var passwordLabel = document.createElement('label');
    passwordLabel.htmlFor = 'password';
    passwordLabel.textContent = 'Senha:';
    form.appendChild(passwordLabel);

    var passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.name = 'password';
    passwordInput.required = true;
    form.appendChild(passwordInput);

    container.appendChild(form);

    var loginButton = document.createElement('button');
    loginButton.type = 'button';
    loginButton.textContent = 'Entrar';
    loginButton.onclick = function () {
        // Adicione aqui a lógica para lidar com o login
        alert('Login realizado com sucesso!');
        window.location.href = "/index/index.html";
    };
    container.appendChild(loginButton);

    var backToRegister = document.createElement('p');
    backToRegister.innerHTML = 'Não tem uma conta? <a href="form.html" class="toggle-btn" onclick="toggleForm()">Cadastrar</a>';
    container.appendChild(backToRegister);
}

function register() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se a senha atende aos critérios
    if (!isValidPassword(password)) {
        alert('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.');
        return;
    }

    // Exibe as informações no console
    console.log('Nome:', name);
    console.log('E-mail:', email);
    console.log('Senha:', password);

    alert('Cadastro realizado com sucesso!');
}

function isValidPassword(password) {
    // Verifica se a senha contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numberRegex = /[0-9]/;

    return uppercaseRegex.test(password) && lowercaseRegex.test(password) && numberRegex.test(password);
}