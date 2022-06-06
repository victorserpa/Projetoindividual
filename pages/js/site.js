function validasejaMembro(){
	
	var nome = document.frmsejamembro.txtnome.value;
	var expRegNome = new RegExp ("^([A-zÀ-ü]{3,})+$");
	
		if (!expRegNome.test(nome)){
			alert ("Preencha corretamente o campo Nome.");
			document.frmsejamembro.txtnome.focus();
			return false;
		}
		
	var fone = document.frmsejamembro.txtfone.value;
	var expRegFone = new RegExp ("^[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
		
		if (!expRegFone.test(fone)){
			alert ("Preencha corretamente o campo Telefone.");
			document.frmsejamembro.txtfone.focus();
			return false;
		}
		
	var email = document.frmsejamembro.email.value;
	var expRegEmail = new RegExp ("^[a-z]{5,10}[@]{1}[a-z]{5,7}[.com]");
		
		if (!expRegEmail.test(email)){
			alert ("Preencha corretamente o campo E-mail.");
			document.frmsejamembro.email.focus();
			return false;
		}
	
	
	if (document.frmsejamembro.txtemail.value==""){
		alert("Preencha o campo E-mail");
		document.frmsejamembro.txtemail.focus();
		return false;
	}
	
	if (document.frmsejamembro.sexo.value==0){
		alert("Selecione o campo Sexo.");
		return false;
	}
	
	if (frmsejamembro.validamembro.checked==false){
		alert("Selecione o campo Deseja Ser Membro");
		frmsejamembro.validamembro.focus();
		return false
	}
	
	return true;
}




