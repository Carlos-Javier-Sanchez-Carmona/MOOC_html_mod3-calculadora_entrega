//funciones para las distintas operaciones, validaciones.
const vaciar = () => {
    document.getElementById("pantalla").value = "";
  };

//validación de datos en el input
const validarEntrada = (input) =>{
    const regex = /^-?\d+(\.\d+)?(,-?\d+(\.\d+)?)*$/;
    return regex.test(input);
  };

//función para mostrar errores
const mostrarError = () =>{
    document.getElementById("pantalla").value = "Error"
    alert("Datos no validos");
};

// función para mostrar informacion sobre el numero
const actualizar_info = (resultado) => {
    let info = document.getElementById("info");
    if (resultado < 100) {
      info.textContent = "Info: El resultado es menor que 100";
    } else if (resultado > 100 && resultado < 200) {
      info.textContent = "Info: El resultado está entre 100 y 200";
    } else {
      info.textContent = "Info: El resultado es superior a 200";
    };
};


//operaciones unitarias
const cuadrado = () => {
    let num = document.getElementById("pantalla");
    if(validarEntrada(num.value)){
      num.value *= num.value;
      actualizar_info(num.value);
    }else{
      mostrarError();
    };
};

function mod (){
    let num = document.getElementById("pantalla");
    let valor = parseFloat(num.value, 10); //lo convierte a un numero flotante
    if(validarEntrada(valor)){
      num.value = valor % 2;
      actualizar_info(num.value);
    }else{
      mostrarError();
    };
};

const fact = () => {
    let num = document.getElementById("pantalla");
    if(validarEntrada(num.value)){
      let factorial = 1;
      for (let i = 2; i <= num.value; i++) {
      factorial *= i;
      };
      num.value = factorial;
      actualizar_info(num.value);
    }else{
      mostrarError();
    }
};