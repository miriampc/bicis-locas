function validateForm(){
  var name=document.getElementById('name').value;
  var lastname=document.getElementById('lastname').value;
  var email=document.getElementById('input-email').value;
  var password=document.getElementById('input-password').value;
  var tipobici=document.getElementById('tipobici').value;

//Funciones de Validación
  function validaNombreApellido(valor){
    if(valor.length==0 || valor==null){
      alert("Este campo es obligatorio");
      return false;
    }else if(!(/^([A-Za-zÑñá-úÁ-Ú ]+)$/.test(valor))){
      alert("Este campo solo acepta letras");
      return false;
    }else if(!(/[^a-zá-ú-0-9\s]+([a-zá-ú ]{2,})/.test(valor))){
      alert("La primera letra debe ser mayuscula");
      return false;
    }
    return true;
  }

  function validaEmail(valor){
    if(valor.length==0 || valor==null){
      alert("Debe ingresar su correo electrónico es obligatorio");
      return false;
    }
    validaPassword(password);
  }
  function validaPassword(valor){
    if(valor.length<6){
      alert("Debe ingresar su password, debe tener almenos seis caracteres");
      return false;
    }else if (valor=="098754" || valor=="123456" || valor=="password") {
      alert("El password debe ser diferente de 123456, 098754 y password");
      return false;
    }
    validaSeleccion(tipobici);
  }
  function validaSeleccion(valor){
    if(valor==0){
      alert("Debe seleccionar una opcion");
      return false;
    }
    alert("Gracias todos los datos fueron enviados!");
    document.getElementById('name').value="";
    document.getElementById('lastname').value="";
    document.getElementById('input-email').value="";
    document.getElementById('input-password').value="";
    document.getElementById('tipobici').value=0;
  }
  if(validaNombreApellido(name)){if(validaNombreApellido(lastname)){validaEmail(email)}return false;}

}
