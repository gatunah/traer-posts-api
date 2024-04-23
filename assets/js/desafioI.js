//1. Realizar un request (consulta) a la API usando async-await.
//3.-Manejar los posibles errores con try-catch.
const getPosts = async () => {
  try {
    const results = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!results.ok) {
      throw new Error('Error al obtener los datos');
    }
    const response = await results.json();
    renderDOM(response);
  } catch (error) {
    console.log(`Error al mostrar datos: ${error}`);
  }
};

//2.-Mostrar el resultado del request en HTML (utilizar listas desordenadas para mostrar cada uno de los post).
function renderDOM(response) {
  const listaDesordenada = $('<ul></ul>');
  response.forEach(({ title, body }) => {
    const listItem = `<li><strong>${title}</strong><br> ${body}</li>`;
    listaDesordenada.append(listItem); 
  });
  $("#post-data").append(listaDesordenada); 
}
