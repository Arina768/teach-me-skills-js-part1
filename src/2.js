async function getDocument(getList) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();

    getList(json);

  } catch (e) {
    console.log(e);
  }
}

export default getDocument;