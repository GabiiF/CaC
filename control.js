//usu y pw
let form = document.querySelector('form');
let usu = document.getElementById('usu');
let pw = document.getElementById('pw');
let submit = document.getElementById('submit');
let expresion=/\w+@/;//(numeros o letra) + @

/*el evento de envío se activa en un formulario cuando se envía*/
form.onsubmit = function(e) {

     /*se fija que nombre y clave no esten vacios*/  
     if (usu.value === '' || pw.value === '') { 
         /*función en el objeto de evento, que detiene el envío del formulario*/
        e.preventDefault();  
        /* si estan vacios, mensaje de error*/
        alert('Completá ambos datos!');
    }
    
    /*se fija que usuario tenga @*/
     else if(!expresion.test(usu.value)){
        /*función en el objeto de evento, que detiene el envío del formulario*/
        e.preventDefault();
        /*si no tiene @, mensaje de error*/ 
        alert('Falta el arroba en el usuario!');
    }
}