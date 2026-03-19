// Seleção de elementos das áreas de Login e Cadastro
const loginArea = document.getElementById('login-area');
const registerArea = document.getElementById('register-area');

// Seleção dos links de alternância
const showRegisterLink = document.getElementById('show-register');
const showLoginLink = document.getElementById('show-login');

// Seleção dos formulários e mensagens
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const messageEl = document.getElementById('message');

// --- LÓGICA DE ALTERNÂNCIA (TROCA DE TELAS) ---

// Trocar para a tela de Cadastro
showRegisterLink.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o link de recarregar a página
    loginArea.style.display = 'none';
    registerArea.style.display = 'block';
    messageEl.textContent = ''; // Limpa mensagens anteriores
});

// Trocar para a tela de Login
showLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerArea.style.display = 'none';
    loginArea.style.display = 'block';
    messageEl.textContent = ''; // Limpa mensagens anteriores
});

// --- LÓGICA DE SUBMISSÃO (LOGIN) ---

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Credenciais fixas para teste
    if (username === 'bob' && password === 'esponja') {
        messageEl.style.color = '#2e7d32'; // Verde
        messageEl.textContent = 'Login bem-sucedido! Bem-vindo à Fenda do Biquini.';
        // Futuro: window.location.href = 'bemvindo.html';
    } else {
        messageEl.style.color = '#c62828'; // Vermelho
        messageEl.textContent = 'Usuário ou senha incorretos. Tente "bob" e "esponja".';
    }
});

// --- LÓGICA DE SUBMISSÃO (CADASTRO) ---

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const regUsername = document.getElementById('reg-username').value;
    const regPassword = document.getElementById('reg-password').value;

    // Simulação de cadastro
    if (regUsername && regPassword) {
        messageEl.style.color = '#2e7d32';
        messageEl.textContent = `Morador ${regUsername} cadastrado com sucesso!`;
        
        // Opcional: Voltar para o login automaticamente após 2 segundos
        setTimeout(() => {
            registerArea.style.display = 'none';
            loginArea.style.display = 'block';
            messageEl.textContent = 'Agora faça login com sua nova conta.';
        }, 2000);
    }
});