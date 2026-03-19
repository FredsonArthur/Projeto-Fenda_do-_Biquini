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

// Caminhos para as imagens de fundo na pasta assets
const imgFundoLogin = "url('assets/fundo-login.jpg')";
const imgFundoCadastro = "url('assets/fundo-cadastro.jpg')";

// --- LÓGICA DE ALTERNÂNCIA (TROCA DE TELAS E FUNDOS) ---

// Trocar para a tela de Cadastro
showRegisterLink.addEventListener('click', function(event) {
    event.preventDefault(); 
    loginArea.style.display = 'none';
    registerArea.style.display = 'block';
    messageEl.textContent = ''; 
    
    // Troca o fundo para o cenário de cadastro
    document.body.style.backgroundImage = imgFundoCadastro;
});

// Trocar para a tela de Login
showLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerArea.style.display = 'none';
    loginArea.style.display = 'block';
    messageEl.textContent = ''; 
    
    // Retorna o fundo para o cenário de login
    document.body.style.backgroundImage = imgFundoLogin;
});

// --- LÓGICA DE SUBMISSÃO (LOGIN COM PERFIS) ---

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura os valores digitados e normaliza o nome para minúsculo
    const usernameInput = document.getElementById('username').value.toLowerCase();
    const passwordInput = document.getElementById('password').value;

    // Busca o morador dentro do objeto carregado pelo arquivo dados.js
    const morador = moradoresFenda[usernameInput];

    // Validação de segurança: verifica se o usuário existe e se a senha coincide
    if (morador && morador.senha === passwordInput) {
        messageEl.style.color = '#2e7d32'; // Verde para sucesso
        messageEl.textContent = `Bem-vindo, ${morador.nome}! Entrando na Fenda...`;

        // ARMAZENAMENTO: Salva os dados do morador para serem recuperados no perfil.html
        localStorage.setItem('usuarioLogado', JSON.stringify(morador));

        // Redireciona para a página única de perfil após um pequeno delay para a mensagem ser lida
        setTimeout(() => {
            window.location.href = 'perfil.html';
        }, 1200);
    } else {
        messageEl.style.color = '#c62828'; // Vermelho para erro
        messageEl.textContent = 'Nome ou senha incorretos. Tente novamente!';
    }
});

// --- LÓGICA DE SUBMISSÃO (CADASTRO) ---

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const regUsername = document.getElementById('reg-username').value;
    
    if (regUsername) {
        messageEl.style.color = '#2e7d32';
        messageEl.textContent = `Morador ${regUsername} cadastrado com sucesso!`;
        
        // Simula o processamento e volta para a tela de login
        setTimeout(() => {
            registerArea.style.display = 'none';
            loginArea.style.display = 'block';
            messageEl.textContent = 'Agora faça login com sua conta.';
            document.body.style.backgroundImage = imgFundoLogin;
        }, 2000);
    }
});