function validar(formTeste){

    if(formTeste.sexo.value == ""){
        alert("Selecione um genero.")
        return false;
    }
    
    for(i = 0; i < 3; i++) {
            if (formTeste.nome.value[i] == " ") {
                alert("Nome inválido.");
                formTeste.nome.focus();
                return false;
               }
        }
        alert("formularioValido");
        return true; 
}