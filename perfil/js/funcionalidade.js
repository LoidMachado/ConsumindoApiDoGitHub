const perfil = document.querySelector(".usuarioSeleccionado")
const pdf = document.querySelector(".usuarioSeleccionado")
const User = JSON.parse(localStorage.getItem("bdPosUser"))
        perfil.innerHTML = `
    <div class="info">
        <img src="${User.avatar_url}" alt="">
        <div>
            <h3></h3>    
        </div>
    </div>
    <div class="compra">
        <h3>Dados</h3>
        <div>
            <table>
                <tr>
                    <td>Nome:</td>
                    <td>${User.login}</td>
                </tr>
                <tr>
                    <td>Id:</td>
                    <td>${User.id}</td>
                </tr>
                <tr>
                    <td>Tipo</td>
                    <td>${User.type}</td>
                </tr>
                
            </table>
        </div>
        <h3>Exportar ficha do usuário</h3>
        <button id="gerarPdf">Exportar</button>
        
    </div>
    `;

const btn = perfil.querySelector("#gerarPdf")

//ConteUdo do pdf
    btn.addEventListener("click", ()=>{
        //console.log(btn)
        pdf.innerHTML = `
    <div class="info">
        <img src="${User.avatar_url}" alt="">
        <div>
            <h3></h3>    
        </div>
    </div>
    <div class="us">
        <h3>Dados</h3>
        <div>
            <table>
                <tr>
                    <td>Nome:</td>
                    <td>${User.login}</td>
                </tr>
                <tr>
                    <td>Id:</td>
                    <td>${User.id}</td>
                </tr>
                <tr>
                    <td>Total Pedido</td>
                    <td>2000Kz</td>
                </tr>
                
            </table>
        </div>
        
    </div>
    `;

//Configuraçaõ do Arquivo fina
        const options = {
            margin: [10, 10, 10, 10],
            filename: "perfil.pdf",
            html2canva: {scale: 2},
            jsPDF: {unit:"mm", format:"a4", orientation: "portrait"}
        }

        html2pdf().set(options).from(pdf).save();
    })