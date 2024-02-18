/* Pedimos los datos de todos los usuarios */
const url = "https://randomuser.me/api/";
async function getDataPerson() {
  const response = await fetch(url, {
    method: "GET",
  });
  const result = await response.json();

  return result;
}

/* Posteamos datos */
async function postDataPerson() {
  const response = await fetch(url, {
    method: "POST",
    body: {
        
    }
  });
  const result = await response.json();

  return result;
}

async function deleteDataPerson() {
  const response = await fetch(url, {
    method: "DELETE",
  });
  const result = await response.json();

  return result;
}

async function putDataPerson() {
  const response = await fetch(url, {
    method: "PUT",
  });
  const result = await response.json();

  return result;
}

getDataPerson();
