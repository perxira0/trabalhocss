const imputNome = document.getElementById("nome");
const imputemail = document.getElementById("email");
const imputMensagem = document.getElementById("mensagem");
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
    if(!inputNome.value || !inputMensagem.value){
        alert("Preencha todos os campos do formulário");
    }else {
        alert("Mensagem enviada com sucesso! Agradeço pelo seu contato.")
    }
})