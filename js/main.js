document.getElementById('registra').onclick= function validateForm(){
	/* Escribe tú código aquí */
  var name=document.getElementById('name').value;
  console.log()
  var lastname=document.getElementById('lastname').value;
  var email=document.getElementById('input-email').value;
  var password=document.getElementById('input-password').value;

  function noVacios(valor){
    if(valor==null || valor.length==0 ){//|| /\s/.test(valor)){
      alert("El campo "+valor +" esta vacio debe llenar es obligatorio")
    }
  }
  function soloLetras(valor){
    if(!(/[A-Za-z]/.test(valor)){
      alert("El campo "+valor +" esta vacio debe llenar es obligatorio")
    }

  }

  noVacios(name);
  noVacios(lastname);
  noVacios(email);
  noVacios(password);

  soloLetras(name);
  soloLetras(lastname);

}

/*document.getElementById('form').onsubmit=function (e){
  e.preventDefault();
}*
