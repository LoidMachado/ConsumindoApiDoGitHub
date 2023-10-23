
const container = document.querySelector(".container");


const xhr = new XMLHttpRequest();
var users;
var ver = document.querySelector(".ver")

xhr.open('GET', 'https://api.github.com/users', true);

xhr.onload = function() {
    if (xhr.status === 200) {
        
        users = JSON.parse(xhr.responseText);
        console.log(users)
        users.map(item => {
            const userCard = document.createElement('div');
            const btn = document.createElement("button")
            btn.classList.add("verMais")
            //ver.appendChild(btn)

            //btn.classList.add('btnVer');
            btn.textContent = 'Ver mais';
            btn.addEventListener("click", (posicaoDoCard) => {
                var posicaoDoCard = users.indexOf(item)
                var posicao = users[posicaoDoCard];
                localStorage.setItem("bdPosUser",JSON.stringify(posicao)); 
                window.location.href='perfil/index.html';

               }
            
            )

            userCard.classList.add('card');
            userCard.innerHTML = `
                <div class="cardFace">
                    <div class="cardFront">
                        <img src="${item.avatar_url}" alt="">
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
            
        });
        
    } else {
        console.log('Erro com status', xhr.status);
    }
}

xhr.send();
function savePosUser(pos) {
    var posicao = pos;
    localStorage.setItem("bdPosUser",JSON.stringify(posicao)); 
   }

function pesquisar() {
    let entrada = document.getElementById('pesquisa').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let nome = card.querySelector('.info h4').textContent.toLowerCase();
        
        if (!nome.includes(entrada)) {
            card.style.display = "none";
        } else {
            card.style.display = "block";
        }
    });
}
