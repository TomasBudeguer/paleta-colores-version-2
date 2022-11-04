// const URL = "http://localhost:4000/apicolores/colores"; //json-server
const URL = process.env.REACT_APP_API_COLORES;
console.log(URL)

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaColores = await respuesta.json();
    return listaColores;
  } catch (error) {
    console.log(error);
  }
};

export const crearColorAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarColorAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};