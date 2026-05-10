# 🔍 Consumindo API do GitHub

Uma aplicação web que consome a API do GitHub para exibir, pesquisar e visualizar usuários com paginação intuitiva.

## 📌 Índice
- [Sobre](#-sobre)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Instalação](#-instalação)
- [Uso](#-uso)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API/Endpoints](#-apiendpoints)
- [Roadmap](#-roadmap)
- [Contribuição](#-contribuição)
- [Licença](#-licença)
- [Autor](#-autor)

## 🚀 Sobre

Este projeto foi desenvolvido para explorar e consumir a **API pública do GitHub**, permitindo aos usuários:
- **Problema que resolve**: Facilita a descoberta e visualização de usuários do GitHub de forma intuitiva
- **Para quem foi feito**: Desenvolvedores e entusiastas que desejam conhecer usuários e contribuidores do GitHub
- **Por que existe**: Como projeto de aprendizagem em consumo de APIs REST e desenvolvimento web front-end
- **Contexto**: Projeto acadêmico de portfolio para demonstrar habilidades em JavaScript, requisições HTTP e integração com APIs externas

## ✨ Funcionalidades

- ✅ **Listagem de Usuários** - Exibir usuários do GitHub em cards responsivos
- ✅ **Pesquisa em Tempo Real** - Buscar usuários pela API da GitHub
- ✅ **Paginação** - Navegação entre páginas de resultados
- ✅ **Perfil Detalhado** - Visualizar informações completas do usuário
- ✅ **Painel Responsivo** - Design adaptável para mobile, tablet e desktop


## 🛠 Tecnologias

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilização e layout responsivo
- **JavaScript** - Lógica de funcionamento (vanilla JS)
- **Bootstrap 5** - Framework CSS para componentes
- **Axios** - Cliente HTTP para requisições
- **GitHub API** - API pública para dados de usuários
- **FontAwesome** - Ícones

## ⚙️ Instalação

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Acesso à internet

### Passos

```bash
# 1. Clone o repositório
git clone <seu-repositorio>
cd ConsumindoApiDoGitHub

# 2. Abra em um servidor local (necessário para CORS)
# Opção A: Usando Python
python -m http.server 8000

# Opção B: Usando Node.js (http-server)
npx http-server

# Opção C: Usando VS Code Live Server
# Instale a extensão Live Server e clique em "Go Live"
```

## 💻 Uso

1. **Acesse a página principal** em `http://localhost:8000/usuarios.html`
2. **Navegue pelos usuários** usando os botões de paginação «Anterior» e «Próximo»
3. **Pesquise usuários específicos** digitando na barra de pesquisa
4. **Clique em "Ver mais"** para visualizar o perfil completo do usuário
5. **Volte** para a lista clicando em "Usuários do GitHub" na página de perfil

## 🔗 API/Endpoints

### GitHub API Endpoints Utilizados

| Endpoint | Descrição |
|----------|-----------|
| `GET /users?page=:page&per_page=12` | Lista usuários com paginação |
| `GET /search/users?q=:termo&page=:page&per_page=12` | Busca usuários por termo com paginação |
| `GET /users/:username` | Obtém informações detalhadas de um usuário |

**Base URL**: `https://api.github.com`

### Exemplos de Requisições

```javascript
// Listar usuários com paginação
axios.get('https://api.github.com/users?per_page=12&page=1')
  .then(response => console.log(response.data))

// Buscar usuários específicos
axios.get('https://api.github.com/search/users?q=octocat&per_page=12&page=1')
  .then(response => console.log(response.data.items))

// Obter detalhes do usuário
axios.get('https://api.github.com/users/octocat')
  .then(response => console.log(response.data))
```


## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo LICENSE para detalhes.

## 👤 Autor

**Loid Machado**
- GitHub: [@LoidMachado](https://github.com/LoidMachado)
- Email: loidmachado@outlook.com

---

**Última atualização:** Maio de 2026
