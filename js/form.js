const arrayDtos = {
  inputs: [
    {
      name: "Tipo de documento",
      options: [
        {
          name: "Libreta de enrolamiento",
        },
        {
          name: "DNI",
        },
        {
          name: "Pasaporte",
        },
      ],
    },
    {
      name: "Numero de documento",
      type: "number",
    },
    {
      name: "Codigo de Entidad",
      type: "number",
    },
    {
      name: "Cuil del titular",
      type: "number",
    },
    {
      name: "codigoIdentidad",
      type: "number",
    },
    {
      name: "codigoIdentidad",
      type: "number",
    },
    {
      name: "codigoIdentidad",
      type: "number",
    },
    {
      name: "codigoIdentidad",
      type: "number",
    },
    {
      name: "codigoIdentidad",
      type: "number",
    },
    {
      name: "Fecha de Cierre del Padrón",
      type: "number",
    },
  ],
};

function addInputs() {
  let container = document.getElementById("containerInputs");

  for (let i = 0; i < arrayDtos.inputs.length; i++) {
    /* Si esto sera un select */
    if (arrayDtos.inputs[i].options) {
      /* Creamos la estructura de los select */
      let select = document.createElement("select");
      let label = document.createElement("label");
      let div = document.createElement("div");
      for (let z = 0; z < arrayDtos[i].options.length; z++) {
        let options = document.createElement("options");

        
        select.appendChild(options)
      }
      div.className = "Input-fild";
      label.innerHTML = arrayDtos.inputs[i].name;
      input.type = arrayDtos.inputs[i].type;
      div.appendChild(label);
      div.appendChild(input);
      container.appendChild(div);
    } else {
      /* Creamos la estructura de los inputs */
      let input = document.createElement("input");
      let label = document.createElement("label");
      let div = document.createElement("div");
      div.className = "Input-fild";
      label.innerHTML = arrayDtos.inputs[i].name;
      input.type = arrayDtos.inputs[i].type;
      div.appendChild(label);
      div.appendChild(input);
      container.appendChild(div);
    }
  }
}

function addSelect() {}
addInputs();
