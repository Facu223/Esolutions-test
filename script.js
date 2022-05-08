const sendData = document.getElementById("send-data");
const formulario = document.getElementById("form-data");
const formulario2 = document.getElementById("form-data-2");
const formulario3 = document.getElementById("form-data-3");
const formulario4 = document.getElementById("form-data-4");
const formulario5 = document.getElementById("form-data-5");
const nameLabel = document.getElementById("name-label");
const sendData2 = document.getElementById("send-data-2");
const options = document.getElementsByClassName("option");
const options2 = document.getElementsByClassName("option-2");
const options3 = document.getElementsByClassName("option-3");
const sendData3 = document.getElementById("send-data-3");
const sendData4 = document.getElementById("send-data-4");
const sendData5 = document.getElementById("send-data-5");
const formFinal = document.getElementById("form-final")
const arrayOptions = [];
const arrayOptions2 = [];
const arrayOptions3 = [];
let radioButtonSelected;

sendData.addEventListener("click", () => {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let sexo = document.getElementById("sexo").value;
  let fecha = document.getElementById("fecha").value;

  const calcularEdad = (fecha) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());
    const anoNacimiento = fecha.slice(0, 4);
    const mesNacimiento = fecha.slice(5, 7);
    const diaNacimiento = fecha.slice(8, 10);
    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
      edad--;
    } else if (mesActual === mesNacimiento) {
      if (diaActual < diaNacimiento) {
        edad--;
      }
    }
    return edad;
  };

  const edad = calcularEdad(fecha)

  if(edad < 5 || edad > 95){
    return alert("Faltan datos por completar o ingresó una edad incorrecta")
  }

  if(edad < 12){
    return alert("Eres menor para realizar la encuesta")
  }

  if (nombre !== "" && apellido !== "" && sexo !== "") {
    formulario.classList.add("disabled");
    formulario2.classList.remove("disabled");
    formulario2.classList.add("form-data-2");
    nameLabel.innerHTML = "Hola, " + nombre + " " + apellido;
  } else {
    alert("Faltan datos por completar")
  }
});

sendData2.addEventListener("click", () => {
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      arrayOptions.push(options[i]);
    }
  }

  if (arrayOptions.length) {
    formulario2.classList.add("disabled");
    formulario3.classList.remove("disabled");
    formulario3.classList.add("form-data-3");

    arrayOptions.map((option) => {
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.setAttribute("class", "option-2");
      input.setAttribute("type", "checkbox");
      input.setAttribute("value", option.value);
      label.innerHTML = option.value;
      label.appendChild(input);
      formulario3.appendChild(label);
    });
  } else {
    alert("Faltan datos por completar");
  }
});

sendData3.addEventListener("click", () => {
  let contador = 0;

  for (let i = 0; i < options2.length; i++) {
    if (options2[i].checked) {
      arrayOptions2.push(options2[i]);
    }
  }

  if (arrayOptions2.length == 1) {
    formulario3.classList.add("disabled");
    formulario5.classList.remove("disabled");
    formulario5.classList.add("form-data-5");

    const p = document.createElement("p");
    p.innerHTML =
      "¿Cuantas horas a la semana le dedica o dedicaría a " +
      arrayOptions2[0].defaultValue +
      "?";
    formulario5.appendChild(p);

    for (let i = 0; i < 6; i++) {
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.setAttribute("type", "radio");
      input.setAttribute("name", "hours");
      if (i == 0) {
        label.innerHTML = "Menos de 4 horas";
      }
      if (i == 1) {
        label.innerHTML = "4 a 6 horas";
      }
      if (i == 2) {
        label.innerHTML = "6 a 8 horas";
      }
      if (i == 3) {
        label.innerHTML = "8 a 10 horas";
      }
      if (i == 4) {
        label.innerHTML = "10 a 15 horas";
      }
      if (i == 5) {
        label.innerHTML = "Más de 15 horas";
      }
      label.appendChild(input);
      formulario5.appendChild(label);
    }
  }

  if (arrayOptions2.length > 1) {
    formulario3.classList.add("disabled");
    formulario4.classList.remove("disabled");
    formulario4.classList.add("form-data-4");
    arrayOptions2.map((option) => {
      const input = document.createElement("input");
      const label = document.createElement("label");
      input.setAttribute("name", "items");
      input.setAttribute("type", "radio");
      input.setAttribute("id", contador);
      contador++;
      input.setAttribute("value", option.value);
      label.innerHTML = option.value;
      label.appendChild(input);
      formulario4.appendChild(label);
    });
  }

  if (arrayOptions2.length == 0) {
    alert("Faltan datos por completar");
  }
});

sendData4.addEventListener("click", () => {
  const items = document.getElementsByName("items");

  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      radioButtonSelected = items[i].value;
    }
  }

  if (radioButtonSelected == undefined) {
    return alert("Faltan datos por completar");
  }

  formulario4.classList.add("disabled");
  formulario5.classList.remove("disabled");
  formulario5.classList.add("form-data-5");

  const p = document.createElement("p");
  p.innerHTML =
    "¿Cuantas horas a la semana le dedica o dedicaría a " +
    radioButtonSelected +
    "?";
  formulario5.appendChild(p);

  for (let i = 0; i < 6; i++) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "hours");
    if (i == 0) {
      label.innerHTML = "Menos de 4 horas";
    }
    if (i == 1) {
      label.innerHTML = "4 a 6 horas";
    }
    if (i == 2) {
      label.innerHTML = "6 a 8 horas";
    }
    if (i == 3) {
      label.innerHTML = "8 a 10 horas";
    }
    if (i == 4) {
      label.innerHTML = "10 a 15 horas";
    }
    if (i == 5) {
      label.innerHTML = "Más de 15 horas";
    }
    label.appendChild(input);
    formulario5.appendChild(label);
  }
});


sendData5.addEventListener("click", () => {
  const radiosButton = document.getElementsByName("hours")
  console.log(radiosButton)
  let checked = false
  for (let i = 0; i < radiosButton.length; i++) {
    if(radiosButton[i].checked){
      console.log("Checked")
      checked = true
    }
  }

  if(checked == false){
   return alert("Faltan datos por completar")
  }

  formulario5.classList.add("disabled")
  formFinal.classList.remove("disabled")
  formFinal.classList.add("form-data-5")
})