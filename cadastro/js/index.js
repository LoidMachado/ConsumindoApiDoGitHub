const tbody = document.querySelector(".tbodyAdmin")
const snome = document.querySelector("#m-nome")
const semail = document.querySelector("#m-email")
const ssenha = document.querySelector("#m-senha")
const btnSalvar = document.querySelector("#btnCadastrar")

let itens
let id
let usuarios = new Array();
if (localStorage.hasOwnProperty("bdUser")) {
    usuarios = JSON.parse(localStorage.getItem("bdUser"))
}
    
function addElement(e) {
    if (snome.value=="" || semail.value=="" || ssenha=="") {
        alert("Preencha os campos")
        return"";
        
    }
    e.preventDefault()
    if(id!==undefined){
        itens[id].nome = snome.value
        itens[id].email = semail.value
        itens[id].senha = ssenha.value;
    }
    else{
        
        var nome = snome.value;
        var email = semail.value;
        var senha = ssenha.value;
        
        snome.value="";
        semail.value="";
        ssenha.value="";
        
        usuarios.push({nome,email,senha});
        alert("Usuário Cadastrado com sucesso")
        window.location.href='../usuarios.html';            
 
    }
    
    save()
}

btnSalvar.addEventListener("click",addElement);

function save() {
    localStorage.setItem("bdUser", JSON.stringify(usuarios))
}

function savePos(pos) {
 var posicao = pos;
 localStorage.setItem("bdPosUser ",JSON.stringify(posicao)); 
 
}