
const container = document.querySelector(".container");
var users = [];

// Função para criar e adicionar card do usuário
function criarCard(item, users) {
    const userCard = document.createElement('div');
    const btn = document.createElement("button");
    btn.classList.add("verMais");
    btn.textContent = 'Ver mais';
    
    btn.addEventListener("click", () => {
        localStorage.setItem("bdPosUser", JSON.stringify(item)); 
        window.location.href = 'perfil/index.html';
    });

    userCard.classList.add('card');
    userCard.innerHTML = `
        <div class="cardFace">
            <div class="cardFront">
                <img src="${item.avatar_url}" alt="${item.login}">
            </div>
            <div class="cardBack">
                <h2></h2>
                <h3 class="us">Nome: <span>${item.login}</span></h3>
                <h3>Identificador: <span>${item.id}</span></h3>
                <h3>Tipo: <span>${item.type}</span></h3>
            </div>
        </div>
        <div class="info">
            <h4>${item.login}</h4>
            <div class="ver">
            </div>
        </div>
    `;

    const ver = userCard.querySelector('.ver');
    ver.appendChild(btn);
    container.appendChild(userCard);
}

// Carregar usuários ao abrir a página
function carregarUsuariosAtivos() {
    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">Carregando usuários...</p>';
    
    axios.get('https://api.github.com/users?per_page=30')
        .then(response => {
            users = response.data;
            container.innerHTML = '';
            
            users.forEach(item => {
                criarCard(item, users);
            });
            
            console.log('Usuários carregados:', users.length);
        })
        .catch(error => {
            console.error('Erro ao carregar usuários:', error);
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red; padding: 20px;">Erro ao carregar usuários. Tente novamente.</p>';
        });
}

// Função de pesquisa na API do GitHub
async function pesquisar() {
    let entrada = document.getElementById('pesquisa').value.trim();
    
    // Se vazio, recarrega lista padrão
    if (entrada === '') {
        carregarUsuariosAtivos();
        return;
    }

    // Buscar apenas se tiver pelo menos 1 caractere
    if (entrada.length < 1) {
        return;
    }

    container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">Pesquisando...</p>';
    
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${entrada}&per_page=30`);
        
        if (response.data.items && response.data.items.length > 0) {
            container.innerHTML = '';
            response.data.items.forEach(item => {
                criarCard(item, response.data.items);
            });
            console.log('Resultados encontrados:', response.data.items.length);
        } else {
            container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 20px;">Nenhum usuário encontrado para "<strong>' + entrada + '</strong>".</p>';
        }
    } catch (error) {
        console.error('Erro na pesquisa:', error);
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: red; padding: 20px;">Erro ao pesquisar. Tente novamente.</p>';
    }
}

// Função para salvar posição do usuário
function savePosUser(pos) {
    localStorage.setItem("bdPosUser", JSON.stringify(pos)); 
}

// Carregar usuários quando a página carrega
document.addEventListener('DOMContentLoaded', carregarUsuariosAtivos);
