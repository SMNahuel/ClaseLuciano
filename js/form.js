const arrayDtos = [
  {
    name: "Codigo de Entidad",
    type: "number",
  },
  {
    name: "Tipo de documento",
    type: "select",
    options: [
      "Documento único",
      "Cédula de Identidad",
      "Libreta de Enrolamiento",
      "Libreta Cívica",
      "Pasaporte",
      "Certificado Migratorio",
      "En trámite (persona recién nacida)",
    ],
  },
  {
    name: "Numero de documento",
    type: "number",
  },

  {
    name: "Cuil del titular",
    type: "number",
  },
  {
    name: "CUIL del Beneficiario",
    type: "number",
  },
  {
    name: "Código de Parentesco",
    type: "number",
  },
  {
    name: "Tipo de Beneficiario",
    type: "number",
  },
  {
    name: "Apellido/s y Nombre/s",
    type: "number",
  },
  {
    name: "Sexo Registrado en el Documento",
    type: "number",
  },
  {
    name: "Fecha de Nacimiento",
    type: "number",
  },
  {
    name: "Calle",
    type: "text",
  },
  {
    name: "N° de puerta",
    type: "text",
  },
  {
    name: "Piso",
    type: "text"
  },
  {
    name: "Departamento",
    type: "text",
  },
  {
    name: "Localidad",
    type: "text",
  },
  {
    name: "Código Postal",
    type: "text",
  },
  {
    name: "Provincia",
    type: "text",
    
  },
  {
    name: "Fecha de Último Pago / Inscripción ",
    type: "text",
  },
  {
    name: "Fecha de Cierre del Padrón",
    type: "text",
  }
];

/* Vamos a un ahorrar codigo en html y poder imprimir estos elementos en JS */
function addInputs() {
  /* Container donde vamos a ingresar los inputs */
  let container = document.getElementById("containerInputs");
  for (let i = 0; i < arrayDtos.length; i++) {
    /* Si esto sera un select */

    /* Creamos la estructura de los inputs */

    if (arrayDtos[i].type === "select") {
      let select = document.createElement("select");
      let div = document.createElement("div");
      let label = document.createElement("label");
      select.className = "Input-fild";
      /* Agregamos cada una de las options */
      for (let z = 0; z < arrayDtos[i].options.length; z++) {
        let options = document.createElement("option");
        options.innerHTML = arrayDtos[i].options[z];
        select.appendChild(options);
      }
      label.innerHTML = arrayDtos[i].name;
      div.appendChild(label);
      div.className = "Input-fild";
      div.appendChild(select);
      container.appendChild(div);
    } else {
      let input = document.createElement("input");
      let label = document.createElement("label");
      let div = document.createElement("div");
      div.className = "Input-fild";
      label.innerHTML = arrayDtos[i].name;
      input.type = arrayDtos[i].type;
      div.appendChild(label);
      div.appendChild(input);
      container.appendChild(div);
    }
  }
}

function insertSelect(div, label, input, container) {
  div.className = "Input-fild";
  label.innerHTML = arrayDtos.inputs[i].name;
  input.type = arrayDtos.inputs[i].type;
  div.appendChild(label);
  div.appendChild(input);
  container.appendChild(div);
}

addInputs();
