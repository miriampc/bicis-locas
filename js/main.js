function validateForm(){
  var name=document.getElementById('name').value;
  var lastname=document.getElementById('lastname').value;
  var email=document.getElementById('input-email').value;
  var password=document.getElementById('input-password').value;
  var tipobici=document.getElementById('tipobici').value;

  function noVacios(valor){
    if(valor.length==0 || valor==null){
      alert("Este campo esta vacio, debe llenar es obligatorio");
      return false;
    }
    return true;
  }

  function soloLetras(valor){
    if(!(/[A-ZÑÁ-Úa-zñá-ú\s]{1,}/.test(valor))){
      alert("Este campo solo acepta letras");
      return false;
    } return true;
  }

  function validaMayus(valor){
    if(!(/[^a-z-0-9\s]+([a-z]{2,})/.test(valor))){
      alert("La primera letra debe ser mayuscula");
      return false;
    }
    return true;
  }
  function validaEmail(valor){
      if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor))){
          return false;
      }
      return true;
}
function pwd(valor){
  if(valor.length<6){
    alert("El password debe tener almenos seis caracteres");
  }else if (valor=="098754" || valor=="123456" || valor=="password") {
    alert("El password debe ser diferente de 123456, 098754 y password");
    return false;
  }else{ return true;}
}


  if(noVacios(name)){
      if(soloLetras(name)){
        if(validaMayus(name)){
          if(noVacios(lastname)){
              if(soloLetras(lastname)){
                if(validaMayus(lastname)){
                    if(noVacios(email)){
                        validaEmail(email);
                        if(noVacios(password)){
                          if(pwd(password)){
                            if(tipobici==0){
                                alert("Debe seleccionar una opcion");
                                return false;
                            }else {
                              return alert("Gracias todos los datos fueron enviados!");
                            }
                          }
                        }
                    }
                }
              }
            }
        }
    }
  }  return false;
}
