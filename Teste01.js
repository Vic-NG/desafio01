function validar(formTeste){

        for(i = 0; i < 3; i++) {
            if (formTeste.nome.value[i] == " ") {
                alert("Nome inválido.");
                formTeste.nome.focus();
                return false;
            }
        }
        alert("");
        return true;
    
}