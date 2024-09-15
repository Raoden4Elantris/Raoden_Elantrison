const nombre = document.getElementById("nombre");
const direccion = document.getElementById("direccion");
const numero = document.getElementById("numero");
const boton = document.querySelector(".btn");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click", (e) => {
  let error = validarCampos();
  if (error[0]) {
    resultado.innerHTML = error[1];
    resultado.classList.add("red");
    resultado.classList.remove("green");
  } else {
    resultado.innerHTML = "Pedido Realizado Correctamente.";
    resultado.classList.add("green");
    resultado.classList.remove("red");
  }
});

const validarCampos = () => {
  let error = [];
  if (nombre.value.length < 5 || nombre.value.length > 40) {
    error[0] = true;
    error[1] = "El nombre es inválido.";
    return error;
  } else if (direccion.value.length < 8) {
    error[0] = true;
    error[1] = "La dirección es inválida.";
    return error;
  } else if (
    numero.value.length < 8 ||
    numero.value.length > 10 ||
    numero.value.indexOf("5") != 0
  ) {
    error[0] = true;
    error[1] = "El número es inválido.";
    return error;
  }

  error[0] = false;
  return error;
};
