const wrapper = document.createElement('div');
const showList = document.createElement('button');
showList.innerText = "CLICK ME";
document.body.append(wrapper);
wrapper.append(showList);

async function getDocument() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const json = await response.json();
    const list = await json;
    await getList(list, showList, wrapper);
  } catch (e) {
    console.log('Ошибка');
  }
}

getDocument();

function getList(list, button, wrapper) {
  button.addEventListener('click', () => {
    button.remove();
    createButtonForLocalStorage();
    const originalList = document.createElement('ul');
    let listItem = 0;
    for (let i = 0; i < list.length; i++) {
      const id = list[i]["id"];
      if (localStorage.getItem(id) == null) {
        listItem = document.createElement('li');
        listItem.innerText = list[i]["title"];
        listItem.setAttribute('id', list[i]["id"]);
        originalList.append(listItem);
      }
    }
    originalList.addEventListener('click', removeItem);
    wrapper.append(originalList);
  });
}

function createButtonForLocalStorage() {
  const clearLocalStorage = document.createElement('button');
  clearLocalStorage.innerText = "Clear Local Storage";
  wrapper.append(clearLocalStorage);
  clearLocalStorage.addEventListener('click', () => {
    localStorage.clear();
  });
}

function removeItem({target, currentTarget}) {
  if (target.tagName === 'LI') {
    target.remove();
    localStorage.setItem(target.id, target);
    if (!currentTarget.childNodes.length) {
      const emptyList = document.createElement('span');
      emptyList.innerText = 'Список пуст';
      wrapper.append(emptyList);
    }
  }
}

