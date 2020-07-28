function getList(list) {

  const originalList = document.createElement('ul');
  let listItem = 0;
  for (let i = 0; i < list.length; i++) {
    listItem = document.createElement('li');
    listItem.innerText = list[i]["title"];
    originalList.append(listItem);
  }
  document.body.append(originalList);
}

export default getList;