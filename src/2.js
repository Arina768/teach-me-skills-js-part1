async function getDoc(getList) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();

    getList(json);

  } catch (error) {
    console.log(error);
  }
}

export default getDoc;