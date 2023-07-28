//CRUD metodos HTTP
//Create - Post
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE
//FETCH API //comunicarnos con server
const listaClientes = () => fetch("http://localhost:3000/perfil").then(respuesta=> respuesta.json());

const crearCliente =(nombre, email)=>{
 return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({nombre, email, id: uuid.v4()}), //convertir objeto a json
  })
};

export const clientServices = {
  listaClientes,
  crearCliente,
};
