let frm = document.querySelector("#form");
const btnLogin = document.getElementById("btn")
const bdCliente = JSON.parse(localStorage.getItem("bdUser")) || [];
let contador = 0;

frm.addEventListener("submit",function(e) {
    e.preventDefault();
})
function FindAccount(){
        let email = document.querySelector('#email').value;
        let senha = document.querySelector('#senha').value;
        console.log("Procurando conta")
        let usuarios = JSON.parse(localStorage.getItem("bdUser")) || [];    
        if (email == "" && senha == "") {
            return ""
        }
        else{
           usuarios.map(usuario => {
            if(email == usuario.email && senha == usuario.senha){ 
                    contador++;
                }
        });
        if(contador !== 0){          
            window.location.href='./usuarios.html';            
        }
        else{
            alert("Senha ou e-mail incorrecto")
            window.location.href='index.html'
        }   
        
    }
    
}